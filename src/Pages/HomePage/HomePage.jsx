import Modal from "../../components/Modal/index.js";
import {useState} from "react";
import ButtonGroup from "../../components/ButtonGroup/index.js";


const HomePage = () => {
  const [isShowModal, setIshowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const handleOpenModal = () =>{
    setIshowModal(true)
  }
  const handleCloseModal = () =>{
      setIshowModal(false)
  }
  const items = [
    {name: 'Page 1',},
    {name: 'Page 2',},
    {name: 'Page 3',},
  ]
  const items2 = [
    {name: 'Rent ',},
    {name: 'Sell ',},
    {name: 'Buy ',},
  ]
  return (
    <div>
      <ButtonGroup activeIndex={activeIndex} setActiveIndex={setActiveIndex} items={items}/>
      { activeIndex === 0 && <div>Описание</div>}
      { activeIndex === 1 && <div>Отзывы</div>}
      { activeIndex === 2 && <div>Опции</div>}
      <ButtonGroup items={items2}/>
      {isShowModal && (
        <Modal close={handleCloseModal}>
          <h2>Lorem ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, sapiente.</p>
        </Modal>
      )}
      <button onClick={handleOpenModal}>open modal</button>

    </div>
  );
};

export default HomePage;