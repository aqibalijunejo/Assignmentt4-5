import Image from "next/image";
import Link from "next/link";
export default function Responsive() {
    return (
      <div className="parentContainer">
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"> <Image className="head" src={"/head.webp"} alt="description" height={50} width={100}></Image></div>
          <h1 className="title">Head:</h1>
          <p className="description">
          Contains the brain, eyes, ears, nose, and mouth. It is responsible for sensory perception, processing information, and controlling bodily functions.{" "}
          </p>
          
          <button className="readMore">Read More</button>
          
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"><Image className="neck" src={"/neck.png"} alt="description" width={150} height={200}></Image></div>
          <h1 className="title">Neck:</h1>
          <p className="description">
          Connects the head to the torso. It houses vital structures such as the trachea (windpipe), esophagus, and major blood vessels, as well as supporting the head's movement.
          {" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer"><Image className="torso" src={"/torso.png"} alt="description" width={50} height={100}></Image></div>
          <h1 className="title">Torso (or Trunk):</h1>
          <p className="description">
          The central part of the body, divided into the thorax (chest) and abdomen. It contains vital organs such as the heart, lungs, stomach, liver, and intestines.{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer"><Image className="uper-limb" src={"/upper-limb.png"} alt="description" width={150} height={250}></Image></div>
          <h1 className="title">Upper Limbs:</h1>
          <p className="description">
          Consist of the arms, forearms, wrists, and hands. They are essential for a wide range of functions, including manipulation of objects, communication, and support.{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer"><Image className="lower-limb" src={"/lower limb.webp"} alt="description"  width={150} height={200}></Image></div>
          <h1 className="title">Lower Limbs:</h1>
          <p className="description">
          Comprising the thighs, knees, calves, ankles, and feet. They are primarily responsible for locomotion, balance, and supporting the body’s weight.{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>


        <div className="childContainer bounce-in-right">
          <div className="imageContainer"><Image className="pelvis" src={"/pelvis.webp"} alt="description" width={150} height={200}></Image>
          <h1 className="title">Pelvis:</h1>
          <p className="description">The region at the base of the torso, supporting the spine and connecting the trunk to the lower limbs. It contains reproductive organs.{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
      </div>
      </div>
    );
  }