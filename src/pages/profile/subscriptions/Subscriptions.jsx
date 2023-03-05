import React from "react";
import { Button } from "../../../components/button/Button";
import css from "./Subscriptions.module.scss";

const Subscriptions = (props) => {
  return (
    <>
      <div className={css.content}>
        <div className={css.subscription}>
          <div>
            <h3 className={css.title}>Підтримка фонду</h3>

            <div className={css.description}>
              <p className={css.date}>
                Дата першого списання коштів <span>02 Бер 2022</span>
              </p>
              <p className={css.sum}>
                Сума списання <span>250 грн</span>
              </p>
            </div>
          </div>

          <div className={css.buttons}>
            <Button title="Редагувати суму" class={`${css.btn}`}></Button>
            <Button title="Відключити підписку" class={`${css.btn}`}></Button>
          </div>
        </div>
        <div className={css.subscription}>
          <div>
            <h3 className={css.title}>Підтримка фонду</h3>

            <div className={css.description}>
              <p className={css.date}>
                Дата першого списання коштів <span>02 Бер 2022</span>
              </p>
              <p className={css.sum}>
                Сума списання <span>250 грн</span>
              </p>
            </div>
          </div>

          <div className={css.buttons}>
            <Button title="Редагувати суму" class={`${css.btn}`}></Button>
            <Button title="Відключити підписку" class={`${css.btn}`}></Button>
          </div>
        </div>
        <div className={css.subscription}>
          <div>
            <h3 className={css.title}>Підтримка фонду</h3>

            <div className={css.description}>
              <p className={css.date}>
                Дата першого списання коштів <span>02 Бер 2022</span>
              </p>
              <p className={css.sum}>
                Сума списання <span>250 грн</span>
              </p>
            </div>
          </div>

          <div className={css.buttons}>
            <Button title="Редагувати суму" class={`${css.btn}`}></Button>
            <Button title="Відключити підписку" class={`${css.btn}`}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
