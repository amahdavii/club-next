import RewardLayout from "../../layout/rewardLayout";
import CouponCard from "../../components/couponSlider/couponCard";
import classes from "../dashboard/dashboard.module.scss";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

var mocSlider = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 110, 111, 112, 113,
];

export default function RewardsPage() {
  return (
    <RewardLayout>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <CouponCard />
        </div>

        <div className="col-span-1">
          <CouponCard />
        </div>

        <div className="col-span-1">
          <CouponCard />
        </div>

        <div className="col-span-1">
          <CouponCard />
        </div>

        <div className="col-span-1">
          <CouponCard />
        </div>
      </div>
    </RewardLayout>
  );
}
