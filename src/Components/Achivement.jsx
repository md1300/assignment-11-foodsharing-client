import img1 from "../assets/image/2.png"
import img2 from "../assets/image/3.png"
import img3 from "../assets/image/4.png"
import img4 from "../assets/image/5.png"

const Achivement = () => {
    return (
        <div className="flex justify-around my-11">
            <div>
                <img  src={img1} alt="" />
                <h1>12,345</h1>
                <p>people reached in 2023</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <h1>587</h1>
                <p>workshops offered in 2023</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <h1>261</h1>
                <p>community initiatives supported in 2023

</p>
            </div>
            <div>
                <img src={img4} alt="" />
                <h1>1,351,515
                </h1>
                <p>lbs produce distributed in 2023

</p>
            </div>
        </div>
    );
};

export default Achivement;