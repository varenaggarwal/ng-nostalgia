export function CreateArea(){
    return (
        <div>
            <form className="create-note">
                <input type="text" placeholder="Title"/>
                <p>
                    <textarea name="content" placeholder="Take a note.."></textarea>
                </p>
                <button className="add-note" type="submit"><i class="fas fa-plus"></i></button>
            </form>
        </div>
    )
}