function getTpl(url, callback) {
    $.ajax({
        type: "get",
        url: url,
        dataType: "html",
        success: function (result) {
            console.log(result, 'success');
            callback(result);
        },
        error: function (result) {
            console.log(result, 'error');
        }
    });
}

var cacheStateAndFireUrlChange = function () {
    console.log(location.href);
    var url = location.hash.split('#/')[1];
    !!url && getTpl('../HTML/' + url + '.html', function (result) {
        $('#app').empty().append(result);
    });
};


//window.addEventListener('popstate', cacheStateAndFireUrlChange);
// We listen on both (hashchange/popstate) when available, as some browsers (e.g. Opera)
// don't fire popstate when user change the address bar and don't fire hashchange when url
// changed by push/replaceState

// html5 history api - popstate event
//if (window.history) $(window).on('popstate', cacheStateAndFireUrlChange);
// hashchange event
//$(window).on('hashchange', cacheStateAndFireUrlChange);
