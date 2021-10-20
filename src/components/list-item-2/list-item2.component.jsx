import React from "react";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";
import ArrowLeftIcon from "../../icons/icons-components/arrow-left-icon/arrow-left-icon.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import "./list-item2.styles.css";
function ListItem2(props) {
  let { itemColor, itemName, itemDescription, itemIsOpen } = props;
  return (
    <div className="task-box-warpper">
      <div className={itemIsOpen ? "task-box-open" : "task-box-close"}>
        <div className="task-box-icons">
          <div className="task-box-arrow">
            <span
              onClick={() =>
                props.openItem(
                  props.itemContainer,
                  props.index,
                  props.setContainer
                )
              }
            >
              {itemIsOpen ? <ArrowLeftIcon /> : <ArrowDownIcon />}
            </span>
          </div>
          <div className="task-box-trash-icon">
            <span
              className="trash-icon"
              style={{ cursor: itemIsOpen ? "pointer" : "initial" }}
              id={props.id}
              onClick={(event) =>
                props.onClickEvent && itemIsOpen
                  ? props.onClickEvent(props.id, ...props.onClickEventParams)
                  : null
              }
            >
              {!itemIsOpen && <TrashIcon disabled={true} />}
              {itemIsOpen && <TrashIcon disabled={false} />}
            </span>
          </div>
        </div>
        <div className="task-header">
          <span
            style={{
              backgroundColor: itemColor,
            }}
            className="importance-level"
          ></span>
          <p className="task-name">{itemName}</p>
        </div>
        {itemIsOpen && (
          <div className="task-description">{itemDescription}</div>
        )}
      </div>
    </div>
  );
}

export default ListItem2;
