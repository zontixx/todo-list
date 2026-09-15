const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

button.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        alert("请输入要做的事");
        return;
    }

    // 新建列表项
    const item = document.createElement("li");
    item.textContent = text;

    // 点这一项 → 在「完成」和「未完成」之间切换
    item.addEventListener("click", function () {
        item.classList.toggle("done");
    });

    // 新建一个「删除」按钮
    const delBtn = document.createElement("button");
    delBtn.textContent = "删除";
    delBtn.addEventListener("click", function () {
        item.remove();
    });

    // 把删除按钮放进这一项，再把这一项放进列表
    item.appendChild(delBtn);
    list.appendChild(item);

    input.value = "";
});

