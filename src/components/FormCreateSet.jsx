import React from 'react';
import { useInput } from './UseInput.jsx';
import './FormCreate.css';
import { useForm } from 'react-hook-form';


export function FormCreateSet() {

    const [count, setCount] = React.useState(0);

    const { register, handleSubmit, formState: { errors } }
        = useForm({
            defaultValues: {
                name: "",
                discription: ""
            }
        });
    console.log(errors);

   React.useEffect(() => {
            if (count !== 0) {
                console.log(`Отправка формы : ${count}`);
                alert(`Отправка формы : ${count}`);
            }
        }, [count]);

    // const { register, handleSubmit } = useForm();
    // const [name, setName] = useInput('');
    // const [discription, setDiscription] = useInput('');

    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }

    // function handleDiscriptionChange(e) {
    //     setDiscription(e.target.value)
    // }

    // function handleSubmit (e){
    //     e.preventDefault();
    //     console.log(name, discription);
    // }
    return (
        // React.useEffect(() => {
        //     if (count !== 0) {
        //         console.log(`Отправка формы : ${count}`);
        //         alert(`Отправка формы : ${count}`);
        //     }
        // }, [count]);

    <form onSubmit={handleSubmit((data) => {
        setCount(count + 1);
        console.log(data);
    })}>
        <label className='label'>
            Название набора:
            <input type="text" name="name" className='input' id='name' {...register("name", {
                required: "Заполните поле название набора",
                minLength: {
                    value: 4,
                    message: 'Название набора должно содержать минимум 4 символа'
                }
            })} />
            <p className='error-msg'>{errors.name?.message}</p>

        </label>
        <label className='label'>
            Описание:
            <textarea name="discription" className='input' id='discription'
                {...register("discription", {
                    required: "Заполните поле описание набора"
                })} />
            <p className='error-msg'>{errors.discription?.message}</p>
        </label>
        <input type="submit" value="Создать сет" className='create' />
    </form>
    );


}