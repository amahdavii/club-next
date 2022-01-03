import classes from "./countDown.module.scss";

export default function CountDown() {
  return (
    <div className={classes.alinclub__countDownContainer}>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>01</span>
        <span className={classes.alinclub__countDownDate}>ثانیه</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>01</span>
        <span className={classes.alinclub__countDownDate}>دقیقه</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>01</span>
        <span className={classes.alinclub__countDownDate}>ساعت</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>01</span>
        <span className={classes.alinclub__countDownDate}>روز</span>
      </div>
    </div>
  );
}
