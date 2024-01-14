import React from 'react';
import './Card.css';
import Item from './Item';

function Card() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Whats Recyclable:</h1>
          <ul className='cards__items'>
            <Item
              src='https://media.npr.org/assets/img/2024/01/09/gettyimages-1258833682-b341ea8034d8fe472962c716c68632ab89cc182b-s1100-c50.jpg'
              text='Plastic Bottles and Containers'
              label='Recyclable'
            />
            <Item
              src='https://i.etsystatic.com/9527421/r/il/aa8d5d/1907244805/il_fullxfull.1907244805_khd5.jpg'
              text='Food & Beverage Cans'
              label='Recyclable'
            />
            <Item
              src='https://as1.ftcdn.net/v2/jpg/03/10/63/02/1000_F_310630236_IgUg8ADocl8DdeOtdFJnUJdZc1DHFOkO.jpg'
              text='Flattened Cardboard & Paperboard'
              label='Recyclable'
            />
          </ul>
          <ul className='cards__items'>
            <Item
              src='https://www.britglass.org.uk/sites/default/files/styles/wide/public/field/image/Press%20Release%20Image%201.jpg?itok=LSO37rsd'
              text='Glass Bottles & Containers'
              label='Recyclable'
            />
            <Item
              src='https://www.silversurfers.com/wp-content/uploads/2023/02/bigstock-Egg-Carton-Boxes-And-Cardboard-468602667.jpg'
              text='Egg Cartons'
              label='Recyclable'
            />
          </ul>
          <h1>Whats Not Recyclable:</h1>
          <ul className='cards__items'>
            <Item
              src='https://imageio.forbes.com/specials-images/imageserve/5f91cb4c568059015a888165/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
              text='Plastic Bags'
              label='Not Recyclable'
            />
            <Item
              src='https://miro.medium.com/v2/resize:fit:1400/1*5ZICdR4MPpgWKkBmw5uaVw.jpeg'
              text='Plastic Wrap'
              label='Not Recyclable'
            />
            <Item
              src='https://i.etsystatic.com/39098255/r/il/3c26fb/4640914848/il_570xN.4640914848_cct4.jpg'
              text='Cups with Wax Coatings'
              label='Not Recyclable'
            />
          </ul>
          <ul className='cards__items'>
            <Item
              src='https://www.allrecipes.com/thmb/FApk8xeCXnBr64NROCH_ezeaU3w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Can-You-Microwave-Styrofoam-3x2-1-5635efd0ae4240c9b9760a4d36a3a108.png'
              text='Polystyrene Foam & Plastic'
              label='Not Recyclable'
            />
            <Item
              src='https://foodprint.org/wp-content/uploads/2018/11/AdobeStock_133146631.jpg'
              text='Food & Dirty Items'
              label='Not Recyclable'
            />
          </ul>
          <ul className='cards__items'>
            <Item
              src='https://aihms.in/blog/wp-content/uploads/2020/11/biomedical.jpg'
              text='Medical Waste'
              label='Not Recyclable'
            />
            <Item
              src='https://ctvnews.ca/content/dam/ctvnews/en/images/2023/8/25/retail-analyst-weighs-in-on-kleenex-leaving-canada-1-6535324.jpg'
              text='Paper towels'
              label='Not Recyclable'
            />
            <Item
              src='https://images2.minutemediacdn.com/image/upload/c_crop,w_7952,h_4473,x_0,y_449/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01ha5jqq44f2qe931p05.jpg'
              text='Aluminum foil'
              label='Not Recyclable'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;