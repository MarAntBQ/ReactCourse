import { useState } from "react";

export const useForm = (initObject = {}) => {
    const [formulario, setFormulario] = useState(initObject);

    const serializarForm = (form) => {
        // Using this JS function to get the form data
        const formData = new FormData(form);
        console.log(formData)

        const completeObject = {};

        // It's passing each item and assigning the value
        for (let [name, value] of formData) {
            completeObject[name] = value;
        }
        // Return this object
        return completeObject;
    }

    const sent = (e) => {
        e.preventDefault();


        const target = e.target;

        let curso = serializarForm(target);

        setFormulario(curso);
        document.querySelector(".code").classList.add("code--sent")
    }

    const cambiado = ({target}) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }
    return {
        formulario,
        sent,
        cambiado
    }
}