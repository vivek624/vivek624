import Image from "next/image";
import profile from "../../../public/vercel.svg";

export default function loadImage() {
  console.log(profile);
  return (
    <div>
      <h2>image optimization</h2>
      {/* <Image src={profile} />


<img src={profile.src}  />
 */}
 <Image src="https://w0.peakpx.com/wallpaper/7/601/HD-wallpaper-ichigo-anime-bankai-bleach-manga.jpg"
    width={500}
    height={500}
 />
 

    </div>
  );
}
