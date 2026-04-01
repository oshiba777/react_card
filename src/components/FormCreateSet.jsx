import './FormCreate.css';
export function FormCreateSet() {
    return (
        <form className='form'>
            <label className='label'>
                Название набора:
                <input type="text" name="name" className='input' />
            </label>
            <label className='label'>
                Описание:
                <textarea name="discription" className='input' />
            </label>
            <input type="submit" value="Создать сет" className='create' />
        </form>
    );
}