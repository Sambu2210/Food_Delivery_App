import landingImage from "../assets/landing.png"
import appdownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600 ">
            Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is jsut a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingimage" />
        <div className="flex flex-col item-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tight">
                Order takeaway even faster!
            </span>
            <span>
                Download the MernEats App for faster ordeing and personlised recommendations
            </span>
            <img src={appdownloadImage} alt="app download Image" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
