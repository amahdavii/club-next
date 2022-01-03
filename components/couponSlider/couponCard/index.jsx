import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import classes from '../style.module.scss';

const CouponCard = (props) => {
    return (
        <div className={classes.alinclub__voucher}>
            <div className={classes.alinclub__voucherPoint}>
                <span>{props.scores}</span>
                <img src="/assets/images/alincoin.png" alt="Alincoin" />
            </div>
            <div className={classes.alinclub__voucherDetail}>
                <div className={classes.alinclub__voucherDetailTop}>
                <img
                    className={classes.alinclub__voucerLogo}
                    src="/assets/images/takhfifan-logo.png"
                    alt="takhfifan"
                />
                <div className={classes.alinclub__progressBar}>
                    <CircularProgressbarWithChildren
                    value={20}
                    text={`${20}٪`}
                    strokeWidth={8}
                    styles={buildStyles({
                        pathColor: `rgb(237, 114, 3)`,
                        textColor: "#494f55",
                        textSize: "30px",
                    })}
                    ></CircularProgressbarWithChildren>
                </div>
                </div>

                <div className={classes.alinclub__voucherDetailDesc}>
                40٪ تخفیف تا سقف 20 هزارتومان برای خرید از تخفیفان
                </div>
            </div>
        </div>
    );
}

export default CouponCard;
