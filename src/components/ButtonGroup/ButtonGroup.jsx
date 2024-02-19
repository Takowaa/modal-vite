import styles from './ButtonGroup.module.css'
import classNames from "classnames";
import {useState} from "react";

const ButtonGroup = ({items,activeIndex,setActiveIndex}) => {


  return (
    <div>
      {
        items.map((item, idx) => {
          return <button key={idx} onClick={() => setActiveIndex(idx)}
                         className={classNames(styles.btn, {[styles.active]: activeIndex === idx})}>{item.name}</button>
        })
      }
    </div>
  );
};

export default ButtonGroup;