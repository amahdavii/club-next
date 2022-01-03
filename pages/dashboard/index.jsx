import CouponSlider from "../../components/couponSlider";
import NewSlider from "../../components/newSlider";
import FAQ from "../../components/faq";
import CountDown from "../../components/countDown/countDown.component";
import classes from "./dashboard.module.scss";

export default function AfterLogin() {
  return (
    <div className="alinclub__dashboardPage">
      <img
        className="w-auto"
        src="/assets/images/banner.png"
        alt="cta banner"
      />
      <div className="container mx-auto py-5">
        <section className="alinclub__dashboardItems grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className={classes.alinclub__dashboardMenu}>
              <div className={classes.alinclub__dashboardMenuTitle}>
                <img
                  src="/assets/images/alinclublogo.png"
                  alt="alinclub logo"
                />
                <div className={classes.alinclub__userReward}>
                  امتیاز شما:
                  <span className={classes.alinclub__userPoint}>
                    570
                    <img src="/assets/images/alincoin.png" alt="alincoin" />
                  </span>
                </div>
              </div>

              <ul className={classes.alinclub__dashboardMenuItems}>
                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CouponSlider/>
        </section>

        <section className={classes.alinclub__lottaryCountDown}>
          <div className="flex items-center">
            <div className="w-2/3">
              <h2 className={classes.alinclub__lottaryCountDownTitle}>
                قرعه کشی
              </h2>
              <p className={classes.alinclub__lottaryCountDownDesc}>
                پایان هر فصل، در آلین ‌کلاب قرعه‌کشی برای جوایزی باارزش داریم که
                میتونید با هر ۵ امتیاز، یک بلیت شانس شرکت در قرعه‌کشی بگیرید
              </p>
            </div>
            <div className="w-1/3">
              <CountDown />
            </div>
          </div>
        </section>

        <section>
          <NewSlider/>
        </section>
         <FAQ/>
        
      </div>
    </div>
  );
}

//  bg-white col-span-2
