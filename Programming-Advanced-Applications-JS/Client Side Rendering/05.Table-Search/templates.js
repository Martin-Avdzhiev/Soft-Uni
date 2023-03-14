import { html, render } from "./node_modules/lit-html/lit-html.js";
const tbody = document.querySelector('tbody');
const rowTemplate = (item) => {
    return  html`
         <tr id=${item._id}>
            <td>${item.firstName} ${item.lastName}</td>
            <td>${item.email}</td>
            <td>${item.course}</td>
         </tr>
         `;
   }
export const renderring = (items) => {
      render(items.map(item=> rowTemplate(item)), tbody);
   }