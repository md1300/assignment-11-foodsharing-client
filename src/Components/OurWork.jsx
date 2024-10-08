import scale from "../assets/image/721.jpg"

const OurWork = () => {
    return (
        <div className=" flex flex-row-reverse items-center gap-8">
            <div className="w-1/2">
                <h1 className="text-3xl mb-11">what we do</h1>
                <p>Foodsharing Ottawa has been rescuing surplus food in Canada s capital since 2015.

Our mission is to reduce the amount of food that gets thrown away in our community by providing and promoting alternative uses.

We donate most of our rescued food to local charities such as food banks and shelters. We are passionate about supporting fairer, more sustainable ways of distributing, using and disposing of food</p>
            </div>
            <div className="relative">
               
               <img className="w-96" src={scale} alt="" />
                <div className="absolute top-3 text-center">
                <h3>Food secure monthly</h3>
                <h1>Over 5000 LBS</h1>
                </div>
            </div>
            
        </div>
    );
};

export default OurWork;
