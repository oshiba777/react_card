import './FormCreate.css';
export function FormcreateCard(){
    return(
        <form className='form'>
            <label className='label'>
                Передняя сторона карточки:
                <input type="text" name="fronttext" className='input' />
            </label>
            <label className='label'>
                Задняя сторона карточки:
               <input type="text" name="backtext" className='input' />
            </label>
            <input type="submit" value="Создать карточку" className='create' /> 
        </form>
    ); 
}