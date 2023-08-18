import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText)
}

document.getElementById("add-button").addEventListener("click",
  () => onClickAdd()
)

const deleteParent = (ChildObject, tag_id="ul-incomplete") => {
    // tag_id 配下の要素を削除する関数
    // Args: ChildObjects削除したい要素の子要素を入力
    //       tag_id どの要素から削除するかをidで指定

    document.getElementById(tag_id).removeChild(ChildObject)
}

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row"

  // list タグの生成
  const li = document.createElement("li");
  li.innerText = text;
  const buttonComp = document.createElement("button")
  buttonComp.innerText = "完了"
  buttonComp.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除する
    deleteParent(buttonComp.parentNode)
    const addTarget = buttonComp.parentNode
    // todo 内容を取得
    const text = addTarget.firstElementChild.innerText;
    
    addTarget.textContent = null;
    // list タグの生成
    const li = document.createElement("li");
    li.innerText = text;
    const buttonReturn = document.createElement("button")
    buttonReturn.innerText = "戻す"
    buttonReturn.addEventListener("click", () => {
      deleteParent(buttonReturn.parentNode, "ul-completed")
      const text = buttonReturn.parentNode.firstElementChild.innerText;
      createIncompleteList(text)

    })
    addTarget.appendChild(li)
    addTarget.appendChild(buttonReturn)
    document.getElementById("ul-completed").appendChild(addTarget)


  })
  const buttonDelete = document.createElement("button")
  buttonDelete.innerText = "削除"
  buttonDelete.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除する
    deleteParent(buttonDelete.parentNode);
  })
  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(buttonComp);
  div.appendChild(buttonDelete);
  // 未完成の要素に追加
  if (text){
    document.getElementById("ul-incomplete").appendChild(div)
  }

}
