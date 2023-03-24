import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, put } from '../api.js';
const main = document.querySelector('main');

export async function editItem(e) {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.getAttribute('current-id');
    const item = await get(`/data/offers/${id}`);
    render(editTemplate(item), main);
    page.redirect('/edit')
}

const editTemplate = (item) => html`
<section id="edit">
          <div class="form" id="${item._id}">
            <h2>Edit Offer</h2>
            <form class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value="${item.title}"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value="${item.imageUrl}"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value="${item.category}"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value="${item.description}"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value="${item.requirements}"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value="${item.salary}"
              />

              <button type="submit" href="/edit" @click="${onSubmit}">post</button>
            </form>
          </div>
        </section>
`

async function onSubmit(e) {
    e.preventDefault();
    const form = e.target.parentNode;
    const data = new FormData(form);
    const title = data.get('title');
    const imageUrl = data.get('imageUrl');
    const category = data.get('category');
    const description = data.get('description');
    const requirements = data.get('requirements');
    const salary = data.get('salary');
    if(!title || !imageUrl || !category || !description || !requirements || !salary){
      return alert('all fileds must be filled!');
    }
    const object = {
        'title': title,
        'imageUrl': imageUrl,
        'category': category,
        'description': description,
        'requirements': requirements,
        'salary': salary
    }
    const id = e.target.parentNode.parentNode.id;
    const response = put(`/data/offers/${id}`,object);
    page.redirect(`/details/${id}`); 
}