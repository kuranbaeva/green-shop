import React from 'react'
import styles from '../../components/Blog/Blog.module.scss'
import { MoveRight } from 'lucide-react'

export default function Blog() {
    return (
        <>
            <div>
                <div className={styles.blog}>
                    <div className={styles.blog_item}>
                        <div className={styles.blog_item_title}>
                            <h2>
                                Our Blog Posts
                            </h2>
                            <p>
                                We are an online plant shop offering a wide range of cheap and trendy plants.
                            </p>
                        </div>
                        <div className={styles.blog_item_cards}>
                            <div className={styles.blog_item_cards_card}>
                                <div className={styles.blog_item_cards_card_img}>
                                    <img src="/assets/img/img1.jpg" alt="" />
                                </div>
                                <div className={styles.blog_item_cards_card_infor}>
                                    <span>
                                        September 12  I Read in 6 minutes
                                    </span>
                                    <h4>
                                        Cactus & Succulent <br />
                                        Care Tips
                                    </h4>
                                    <p>
                                        Cacti are succulents are easy care plants for any home or patio.
                                    </p>
                                    <div className={styles.blog_item_cards_card_infor_btn}>
                                        <button>
                                            Read More
                                            <MoveRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.blog_item_cards_card}>
                                <div className={styles.blog_item_cards_card_img}>
                                    <img src="/assets/img/img2.jpg" alt="" />
                                </div>
                                <div className={styles.blog_item_cards_card_infor}>
                                    <span>
                                        September 12  I Read in 6 minutes
                                    </span>
                                    <h4>
                                        Cactus & Succulent <br />
                                        Care Tips
                                    </h4>
                                    <p>
                                        Cacti are succulents are easy care plants for any home or patio.
                                    </p>
                                    <div className={styles.blog_item_cards_card_infor_btn}>
                                        <button>
                                            Read More
                                            <MoveRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.blog_item_cards_card}>
                                <div className={styles.blog_item_cards_card_img}>
                                    <img src="/assets/img/img3.jpg" alt="" />
                                </div>
                                <div className={styles.blog_item_cards_card_infor}>
                                    <span>
                                        September 12  I Read in 6 minutes
                                    </span>
                                    <h4>
                                        Cactus & Succulent <br />
                                        Care Tips
                                    </h4>
                                    <p>
                                        Cacti are succulents are easy care plants for any home or patio.
                                    </p>
                                    <div className={styles.blog_item_cards_card_infor_btn}>
                                        <button>
                                            Read More
                                            <MoveRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.blog_item_cards_card}>
                                <div className={styles.blog_item_cards_card_img}>
                                    <img src="/assets/img/img4.jpg" alt="" />
                                </div>
                                <div className={styles.blog_item_cards_card_infor}>
                                    <span>
                                        September 12  I Read in 6 minutes
                                    </span>
                                    <h4>
                                        Cactus & Succulent <br />
                                        Care Tips
                                    </h4>
                                    <p>
                                        Cacti are succulents are easy care plants for any home or patio.
                                    </p>
                                    <div className={styles.blog_item_cards_card_infor_btn}>
                                        <button>
                                            Read More
                                            <MoveRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
