import React from 'react'
import css from './Dashboard.module.css'
import {cardsData, groupNumber} from "../../data/data.jsx";
import {Statistics} from "../../components/statistics/Statistics.jsx";
import {Orders} from "../../components/orders/Orders.jsx";

export const Dashboard = () => {
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>Dashboard</span>

                        <div className={css.durationButton}>
                            <select>
                                <option value=''>1 week</option>
                                <option value=''>1 month</option>
                                <option value=''>1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        {
                            cardsData.map((card, index) =>
                                (
                                    <div className={css.card} key={card.title}>
                                        <div className={css.cardHead}>
                                            <span>{card.title}</span>
                                            <span>+{card.change}</span>
                                        </div>
                                        <div className={css.cardAmount}>
                                            <span>$</span>
                                            <span>{groupNumber(card.amount)}</span>
                                        </div>
                                    </div>
                                ),
                            )
                        }
                    </div>
                </div>

                <Statistics/>
            </div>

            <Orders/>
        </div>
    )
}
