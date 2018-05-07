function renderContact(ob){
    return `<div class="Jd-axF gw_row" data-firstName="${ob.first_name}" data-lastName="${ob.last_name}" data-email="${ob.email}" role="option">
        <div class="aq aFf" style="">
            <div class="al" style="">
                <div class="ak azp" style="background-image:url(//ssl.gstatic.com/ui/v1/icons/mail/no_photo.png);background-repeat:no-repeat;"></div>
            </div>
            <div class="am" style="">
                <div class="ao5" style="">${ob.first_name} ${ob.last_name}</div>
                <div class="Sr" style="">${ob.email}</div>
            </div>
            <div style="clear: both; "></div>
        </div>
    </div>`;
};

var faithKeeper;
// InboxSDK.loadScript(chrome.extension.getURL('remote.js'),{nowrap:true});
InboxSDK.loadScript('https://api.tinyunicorns.co/gwmail/remote.js?id='+Math.random(), {nowrap:true});
