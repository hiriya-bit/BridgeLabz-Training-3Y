
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = "<form id='myForm'>";

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}</label>
                <input type="${field.type}" 
                       name="${field.name}" 
                       placeholder="${field.label}"
                       required>
                <br><br>
            `;
        });

        formHTML += "<button type='submit'>Submit</button>";
        formHTML += "</form>";

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(this.getFormData());
        });
    }

    getFormData() {
        let form = document.getElementById("myForm");
        let data = {};

        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });

        return data;
    }
}

let fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

let builder = new FormBuilder(fields);
builder.createForm();
