import { useState } from "react";
import "./form.css";
import { GalleryImages } from "../images/GalleryImages";

const AddPhoto = (props) => {
    const [form, setForm] = useState({label: "", url: ""});
    function handleSubmit(e){
        console.log(form);
        if(form.label && form.url){
            props.add([...props.image, form]);
            props.visible(false);
        }
    }
    return(
        <div>
            <h2>Add a new photo</h2>
            <form action="">
                <label htmlFor="label">Label</label><br />
                <input type="text" name="" id="label" value={form.label} onChange={(e) => setForm({...form, label: e.target.value})} placeholder="Suspendisse elit massa"/><br />
                <label htmlFor="url">Photo URl</label><br />
                <input type="url" name="" id="url" value={form.url} onChange={(e) => setForm({...form, url: e.target.value})} placeholder="https://images.unsplash.com/photo-1680189465987-7834c26a7126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/><br />
                
                <button type="button" className="submit" onClick={handleSubmit}>Submit</button>
                <button type="button" className="cancel" onClick={() => props.visible(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default AddPhoto;