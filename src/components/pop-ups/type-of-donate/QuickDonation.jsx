import React, { useState } from "react";
import css from "../PopUp.module.scss";
import fs from "../../form/Form.module.scss";
import { Button } from "../../button/Button";

const selectList = [
  { title: "Медичні та гуманітарні потреби 1" },
  { title: "Медичні та гуманітарні потреби 2" },
  { title: "Медичні та гуманітарні потреби 3" },
  { title: "Медичні та гуманітарні потреби 4" },
];

const QuickDonation = ({ close, ...props }) => {
  const [amountDonate, setAmount] = useState("");
  const [period, setPeriod] = useState("monthly");
  const [firstStep, setStep] = useState(true);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectList[0].title);

  const changeSelectedValue = (value) => {
    setSelected(value);
    setOpen(false);
  };

  const oneTimeSupport = () => (
    <>
      <div className={css.amount}>
        <h4>Оберіть суму</h4>
        <div className={css.sums}>
          {donationAmount.map((amount, idx) => (
            <button
              key={idx}
              onClick={(e) => setAmount(amount.amount.split(" ")[0])}
              className={`${css.s} ${
                amountDonate == amount.amount.split(" ")[0] ? css.active : ""
              }`}
            >
              {amount.amount}
            </button>
          ))}
        </div>
        <label htmlFor="amount" className={fs.form_row}>
          <input
            type="number"
            name="amount"
            placeholder="Інша сума"
            onInput={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
      </div>
      <label htmlFor="purpose" className={fs.form_row}>
        <span className={fs.placeholder}>Призначення платежу*</span>
        <input type="text" name="purpose" />
      </label>
    </>
  );

  const monthlySupport = () => (
    <>
      <div className={css.amount}>
        <h4>Оберіть суму</h4>
        <div className={css.sums}>
          {donationAmount.map((amount, idx) => (
            <button
              key={idx}
              onClick={(e) => setAmount(amount.amount.split(" ")[0])}
              className={`${css.s} ${
                amountDonate == amount.amount.split(" ")[0] ? css.active : ""
              }`}
            >
              {amount.amount}
            </button>
          ))}
        </div>
        <label htmlFor="amount" className={fs.form_row}>
          <input
            type="number"
            name="amount"
            placeholder="Інша сума"
            onInput={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
      </div>
      <label htmlFor="date" className={fs.form_row}>
        <span className={fs.placeholder}>Дата списання коштів*</span>
        <input type="date" name="date" placeholder="Ваш e-mail або телефон" />
      </label>
      <label
        htmlFor="purpose"
        className={`${fs.form_row} ${fs.form_select} ${
          isOpen ? fs.active : ""
        }`}
      >
        <span className={fs.placeholder}>Призначення платежу*</span>
        <input
          type="text"
          name="purpose"
          value={selected}
          readOnly
          onClick={(e) => setOpen(!isOpen)}
        />

        {isOpen && (
          <div className={fs.select_list}>
            {selectList.map((type, idx) => (
              <div
                key={idx}
                onClick={(e) => changeSelectedValue(type.title)}
                className={`${fs.l} ${selected == type.title ? fs.selected : ""}`}
              >
                {type.title}
              </div>
            ))}
          </div>
        )}
      </label>
    </>
  );

  const periodButtons = [
    {
      title: "Одноразова допомога",
      key: "oneTime",
    },
    {
      title: "Щомісячна підтримка",
      key: "monthly",
    },
  ];

  const donationAmount = [
    { amount: "50 грн" },
    { amount: "100 грн" },
    { amount: "200 грн" },
    { amount: "1000 грн" },
  ];

  const periodFn = {
    oneTime: oneTimeSupport(),
    monthly: monthlySupport(),
  };

  return (
    <>
      <div className={css.steps}>
        <div className={`${css.step} ${css.active}`}>
          <div className={css.ico}>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 5.1917C17.0006 5.08642 16.9804 4.98206 16.9406 4.8846C16.9008 4.78714 16.8421 4.69849 16.768 4.62374L13.376 1.232C13.3012 1.15786 13.2126 1.0992 13.1151 1.05939C13.0176 1.01958 12.9133 0.999405 12.808 1.00001C12.7027 0.999405 12.5983 1.01958 12.5009 1.05939C12.4034 1.0992 12.3147 1.15786 12.24 1.232L9.976 3.49583L1.23201 12.2392C1.15787 12.3139 1.09921 12.4026 1.0594 12.5C1.01958 12.5975 0.999405 12.7019 1.00001 12.8071V16.1989C1.00001 16.411 1.0843 16.6145 1.23433 16.7645C1.38436 16.9145 1.58784 16.9988 1.80001 16.9988H5.19201C5.30395 17.0049 5.41592 16.9874 5.52066 16.9474C5.6254 16.9075 5.72057 16.8459 5.80001 16.7668L14.496 8.02349L16.768 5.79965C16.841 5.72213 16.9005 5.63289 16.944 5.53567C16.9875 5.43846 16.9995 5.27567 17 5.1917ZM4.86401 15.3989H2.60001V13.1351L10.544 5.1917L12.808 7.45553L4.86401 15.3989ZM13.936 6.32762L11.672 4.06378L12.808 2.93587L15.064 5.1917L13.936 6.32762Z"
                fill="#00487D"
              />
            </svg>
          </div>
          <div className={css.text}>Оберіть суму</div>
        </div>
        <div className={css.line}></div>

        <div className={css.step}>
          <div className={css.ico}>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31603 14.7071C4.89466 14.3166 4.89466 13.6834 5.31603 13.2929L9.9481 9L5.31603 4.70711C4.89466 4.31658 4.89466 3.68342 5.31603 3.29289C5.73741 2.90237 6.4206 2.90237 6.84198 3.29289L13 9L6.84198 14.7071C6.4206 15.0976 5.73741 15.0976 5.31603 14.7071Z"
                fill="#00487D"
              />
            </svg>
          </div>
          <div className={css.text}>Введіть дані</div>
        </div>
        <div className={css.line}></div>
        <div className={css.step}>
          <div className={css.ico}>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31603 14.7071C4.89466 14.3166 4.89466 13.6834 5.31603 13.2929L9.9481 9L5.31603 4.70711C4.89466 4.31658 4.89466 3.68342 5.31603 3.29289C5.73741 2.90237 6.4206 2.90237 6.84198 3.29289L13 9L6.84198 14.7071C6.4206 15.0976 5.73741 15.0976 5.31603 14.7071Z"
                fill="#00487D"
              />
            </svg>
          </div>
          <div className={css.text}>Оплатіть</div>
        </div>
      </div>

      <div className={css.quick_donation}>
        <h5>Швидкий донат</h5>

        <div className={`${css.form_step} ${firstStep ? css.active : ""}`}>
          <div className={css.types_donation}>
            {periodButtons.map((type, idx) => (
              <button
                key={idx}
                onClick={(e) => setPeriod(type.key)}
                className={`${css.b} ${period == type.key ? css.active : ""}`}
              >
                {type.title}
              </button>
            ))}
          </div>

          <div className={css.form}>{periodFn[period]}</div>
        </div>

        <div
          className={`${css.form_step} ${css.second} ${
            !firstStep ? css.active : ""
          }`}
        >
          <h4>Ваші дані</h4>

          <label htmlFor="name" className={fs.form_row}>
            <span className={fs.placeholder}>Ім'я*</span>
            <input type="text" name="name" placeholder="Введіть ваше ім’я" />
          </label>

          <div className={css.double}>
            <label htmlFor="e-mail" className={fs.form_row}>
              <span className={fs.placeholder}>E-mail*</span>
              <input
                type="e-mail"
                name="e-mail"
                placeholder="Введіть ваш e-mail"
              />
            </label>
            <label htmlFor="tell" className={fs.form_row}>
              <span className={fs.placeholder}>Телефон</span>
              <input
                type="number"
                name="tell"
                defaultValue={"380"}
                // placeholder="Ваш e-mail або телефон"
              />
            </label>
          </div>
          <label htmlFor="message" className={fs.form_row}>
            <span className={fs.placeholder}>Повідомлення</span>
            <input
              type="text"
              name="message"
              placeholder="Введіть ваше повідомлення"
            />
          </label>
          <label htmlFor="anonymous" className={css.checkbox}>
            <input type="checkbox" id="anonymous" name="anonymous" />
            <span className={css.checked}></span>
            <span className={`link`}>Зробити платіж анонімним</span>
          </label>
          <label htmlFor="agree" className={css.checkbox}>
            <input type="checkbox" id="agree" name="agree" />
            <span className={css.checked}></span>
            <span className={`link`}>
              Я погоджуюся з тим, що введена мною особиста інформація буде
              використана згідно з Політикою Конфеденційності
            </span>
          </label>
        </div>

        <div className={css.buttons_navs}>
          {firstStep ? (
            <>
              <Button
                title="Скасувати"
                callBack={close}
                class={"light_button"}
              />
              <Button
                title="Далі"
                class={"dark_button"}
                callBack={(e) => setStep(false)}
              />
            </>
          ) : (
            <>
              <Button
                title="Назад"
                callBack={(e) => setStep(true)}
                class={"light_button"}
              />
              <Button title="Зробити внесок" class={"yellow_button"} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuickDonation;
