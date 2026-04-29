import './FormCreate.css';
import React from 'react';
import { useInput } from './UseInput.jsx';
import { useForm } from 'react-hook-form';

export function FormcreateCard() {

    const [count, setCount] = React.useState(0);

    const { register, handleSubmit, formState: { errors } }
        = useForm({
            defaultValues: {
                fronttext: "",
                backtext: ""
            }
        });
    console.log(errors);

    React.useEffect(() => {
        if (count !== 0) {
            console.log(`Отправка формы : ${count}`);
            alert(`Отправка формы : ${count}`);
        }
    }, [count]);

    return (
        <form className='form' onSubmit={handleSubmit((data) => {
            setCount(count + 1);
            console.log(data);
        })}>
            <label className='label'>
                Передняя сторона карточки:
                <input type="text" name="fronttext" className='input' id='fronttext'  {...register("fronttext", {
                    required: "Заполните поле название набора",
                    minLength: {
                        value: 4,
                        message: 'Название набора должно содержать минимум 4 символа'
                    }
                })} />
                <p className='error-msg'>{errors.fronttext?.message}</p>
            </label>
            <label className='label'>
                Задняя сторона карточки:
                <input type="text" name="backtext" className='input' id='backtext' {...register("backtext", {
                    required: "Заполните поле название набора",
                    minLength: {
                        value: 4,
                        message: 'Название набора должно содержать минимум 4 символа'
                    }
                })} />
                <p className='error-msg'>{errors.backtext?.message}</p>
            </label>
            <input type="submit" value="Создать карточку" className='create' />
        </form>
    );
}