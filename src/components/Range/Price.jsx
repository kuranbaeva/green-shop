import React, { useState } from 'react'
import Slider from 'react-slider'
import './Price.scss'
const MIN = 0;
const MAX = 2000;

export default function Price() {
    const [values, setValues] = useState([MIN, MAX])
    console.log(values);

    return (
        <>

            <div className='price'>
                <div className='price__box'>
                    <div>
                        <h3>Price Range</h3>
                    </div>

                </div>

                <Slider className={'slider'}
                    onChange={setValues}
                    value={values} min={MIN}
                    max={MAX} />

                <div className='price__values'>
                    <p>
                        Price:
                    </p>
                    <span className='price__value'>${values[0]}-${values[1]}</span>
                </div>

            </div>
        </>
    )
}
