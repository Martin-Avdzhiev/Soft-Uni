import { html, render } from './node_modules/lit-html/lit-html.js';
import { get } from './api.js';
const tbody = document.querySelector('tbody');
//@click="${edit}"
//@click="${delete_}"
const rowTemplate = (item)=>{
   return html `
    <tr>
        <td>${item.author}</td>
        <td>${item.title}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>
    `;
}

export const renderring = async ()=>{
    const data = await get();
    for (const value of Object.values(data)) {
        render(rowTemplate(value),tbody);
    }
}
renderring()