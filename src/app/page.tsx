import SwiperSlider from "@/app/components/Slider/Slider";
import Announcement from "@/app/components/Announcement/Announcement";
import Tabs from "@/app/components/Tabs/Tabs";
import Favourites from "@/app/components/Favourites/Favourites";
import FeaturedGame from "@/app/components/FeaturedGame/FeaturedGame";
import {SocialCommunity} from "@/app/components/SocialCommunity/SocialCommunity";
import {PaymentMethods} from "@/app/components/PaymentMethods/PaymentMethods";
import OfficialPartner from "@/app/components/OfficialPartner/OfficialPartner";


export default function Home() {
  return (
    <div className={`flex flex-colum`}>
        <div className={`slider`}>
            <SwiperSlider />
        </div>
        <div className={`flex`}><Announcement /></div>
        <div className={`flex`}><Tabs/></div>
        <div className={`flex`}><Favourites /></div>
        <div className={`flex`}><FeaturedGame /></div>

    </div>
  );
}
