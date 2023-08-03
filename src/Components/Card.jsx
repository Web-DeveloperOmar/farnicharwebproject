// import React from 'react'
import '../css/card.css'
import productimg1 from '../assets/productimg1.svg'
// import productimg2 from '../assets/productimg2.svg'
// import productimg3 from '../assets/productimg3.svg'
// import productimg4 from '../assets/productimg4.svg'
import star from '../assets/star.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'

export const Card = () => {
  return (
    <div className="card">
      <div className="products">
        <div className="product">
          <div className="product-details">
            <img src={productimg1} />
            <div className="content">
              <h3>MORDERN BLACK STANDING METAL LIGHT</h3>

              <div className="star">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>

              <div className="variant">
                <select id="productVariant">
                  <option value="volvo">add items</option>
                  <option value="type:Long" selected>
                    type:<b>Long</b>
                  </option>
                </select>
              </div>

              <div className="colors">
                <div
                  className="color1"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color2"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color3"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color4"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>
              </div>
            </div>
          </div>
          <div className="product-price">
            <div className="variant1">
              <img src={plus} />
              <h2>
                Number:<span>1</span>
              </h2>
              <img src={minus} />
            </div>
            <h1 className="price">$235.41</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-details">
            <img src={productimg1} />
            <div className="content">
              <h3>MORDERN BLACK STANDING METAL LIGHT</h3>

              <div className="star">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>

              <div className="variant">
                <select id="productVariant">
                  <option value="volvo">add items</option>
                  <option value="type:Long" selected>
                    type:<b>Long</b>
                  </option>
                </select>
              </div>

              <div className="colors">
                <div
                  className="color1"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color2"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color3"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color4"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>
              </div>
            </div>
          </div>
          <div className="product-price">
            <div className="variant1">
              <img src={plus} />
              <h2>
                Number:<span>1</span>
              </h2>
              <img src={minus} />
            </div>
            <h1 className="price">$235.41</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-details">
            <img src={productimg1} />
            <div className="content">
              <h3>MORDERN BLACK STANDING METAL LIGHT</h3>

              <div className="star">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>

              <div className="variant">
                <select id="productVariant">
                  <option value="volvo">add items</option>
                  <option value="type:Long" selected>
                    type:<b>Long</b>
                  </option>
                </select>
              </div>

              <div className="colors">
                <div
                  className="color1"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color2"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color3"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>

                <div
                  className="color4"
                  onClick={(e) => e.target.classList.toggle("stylecolorbox")}
                ></div>
              </div>
            </div>
          </div>
          <div className="product-price">
            <div className="variant1">
              <img src={plus} />
              <h2>
                Number:<span>1</span>
              </h2>
              <img src={minus} />
            </div>
            <h1 className="price">$235.41</h1>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="yourReview">
        <h1 className="titlereview">ORDER SUMMARY</h1>
        <h4 className="titlereview2">
          Apply your monthly voucher to get more discount!
        </h4>
        <div className="inputs">
          <input type="text" name="" id="" placeholder="Your voucher code" />
          <div className="sumary">
            <div className="price">
              <h2>Price</h2>
              <h1>$1,725.00</h1>
            </div>
            <div className="Discount">
              <h2>Discount 10%</h2>
              <h1>-$125.00</h1>
            </div>
            <div className="TotalPrice">
              <h2>Total Price</h2>
              <h1>$1,600.00</h1>
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Whire your message here....."
          ></textarea>
        </div>
        <input type="button" value="PROCEED TO CHECKOUT" />
      </div>
    </div>
  );
}
