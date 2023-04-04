import userIcon from "../../assets/person_FILL0_wght400_GRAD0_opsz48.svg";
import "./gallery.css";
import { GalleryImages } from "../images/GalleryImages";
import { useEffect, useState } from "react";
import AddPhoto from "../addPhoto/AddPhoto";

const Gallery = () => {
    const [over, setOver] = useState(false);
    const [imageData, setImageData] = useState([]);
    const [viewForm, setViewForm] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        setImageData([...GalleryImages]);
    }, [GalleryImages])
    function handleDelete(delId){
        const filterImage = imageData.filter((data, index) => {
            if(delId !== index){
                return data;
            }
        })
        setImageData([...filterImage]);
    }
    function handleSearch(e){
        setSearch(e.target.value);
        const searchFilter = imageData.filter((data) => {
            const label = data.label.toLowerCase();
            const searchVal = search.toLowerCase();
            if(label.includes(searchVal)){
                return data;
            }
        })
        setImageData([...searchFilter]);
        if(search === ""){
            setImageData(GalleryImages);
        }
    }
    const renderImages = imageData.map((image, index) => {
        return(
            <div key={index} onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)}>
                <div className="image-container">
                    <img src={image.url} alt="by Unsplash" />
                    <div className="delete-btn">
                        {
                            over && 
                            <form>
                                <button type="button" onClick={() => handleDelete(index)}>delete</button>
                            </form>
                        }
                    </div>
                    {
                        over && 
                        <div className="label">
                            <label>{image.label}</label>
                        </div>
                    }
                </div>
            </div>
        )
    })
    return(
        <div>
            <div className="gallery-header">
                <div className="user">
                    <div className="user-icon">
                        <img src={userIcon} alt="icon" />
                    </div>
                    <div className="user-name">
                        <h2>My Unsplash</h2>
                        <p>devchallenges.io</p>
                    </div>
                    <div className="search-bar">
                        <form>
                            <input type="search" name="" id="" placeholder="search by name" value={search} onChange={handleSearch}/>
                        </form>
                    </div>
                </div>
                
                <div className="add-photo">
                    <form>
                        <button type="button" onClick={() => setViewForm(true)}>Add a photo</button>
                    </form>
                </div>
            </div>
            {
                viewForm &&
                <div className="form">
                    <AddPhoto visible = {setViewForm} add={setImageData} image={imageData}/>
                </div>
            }
            
            
            <div className="main">
                {renderImages}
            </div>
        </div>
    )
}

export default Gallery;