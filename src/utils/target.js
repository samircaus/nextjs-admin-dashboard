function sanitizeViewName(viewName) {
    if (viewName.startsWith('#')) {
        viewName = viewName.substr(1);
    }
    if (viewName.startsWith('/')) {
        viewName = viewName.substr(1);
    }
    return viewName;
}
export function triggerView(viewName) {
    // console.log("triggerView called for " + viewName)
    viewName = sanitizeViewName(viewName) || 'home';
    // Validate if the Target Libraries are available on your website
    if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
        adobe.target.triggerView(viewName);
        console.log('AT: View triggered on page load: ' + viewName)
    } else {
        //defer for later ?

    }
}