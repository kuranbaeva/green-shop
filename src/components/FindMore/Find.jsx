import React from 'react'
import styles from '../../components/FindMore/Find.module.scss'
import Button from '../../components/UI/Button/Button'
import { MoveRight } from 'lucide-react'

export default function Find() {
    return (
        <>
            <div>
                <div className={styles.find_item}>
                    <div className={styles.find_item_cards}>
                        <div className={styles.find_item_cards_card}>
                            <div className={styles.find_item_cards_card_img}>
                                <img src="/assets/plants/img2.png" alt="" />
                            </div>
                            <div className={styles.find_item_cards_card_infor}>
                                <h3>
                                    Summer cactus <br />
                                    & succulents
                                </h3>
                                <p>
                                    We are an online plant shop offering a wide range of cheap and trendy plants
                                </p>
                                <div className={styles.find_item_cards_card_infor_btn}>
                                    <Button>
                                        Find More
                                        <MoveRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.find_item_cards_card}>
                            <div className={styles.find_item_cards_card_img}>
                                <img src="/assets/plants/img7.png" alt="" />
                            </div>
                            <div className={styles.find_item_cards_card_infor}>
                                <h3>
                                    Styling Trends <br />
                                    & much more
                                </h3>
                                <p>
                                    We are an online plant shop offering a wide range of cheap and trendy plants
                                </p>
                                <div className={styles.find_item_cards_card_infor_btn}>
                                    <Button>
                                        Find More
                                        <MoveRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
