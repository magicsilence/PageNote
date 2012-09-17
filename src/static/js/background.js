function addNote(data) {
}

function delNote() {
}

//右键菜单添加笔记
(function() {
    //right click menus
    function addMenu(title, callback) {
        chrome.contextMenus.create({
            title: title,
            contexts: ["all"],
            onclick: function(clickdata, tab) {
                console.log(chrome.extension);
                console.log(chrome.extension.getBackgroundPage());
                callback(tab, clickdata); 
            }
        }); 
    }   


    addMenu('添加Note', function(tab, clickdata) {
        addNote(clickdata);
    });

    addMenu('删除Note', function(tab, clickdata) {
        delNote();
    });
})();

