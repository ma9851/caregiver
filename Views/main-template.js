
//The base HTML Template, all pages will contain this information
exports.build = function(pagetitle, content) {
    return ['<!doctype html>',
        '<html lang="en"><meta charset="utf-8"><title>{title}</title>',
        '<link rel="stylesheet" href="/CSS/colors.css" />',
        '<h1>{pagetitle}</h1>',
        '<div id="content">{content}</div>']
        .join('')
        .replace(/{title}/g, "CAREGIVER")
        .replace(/{pagetitle}/g, pagetitle)
        .replace(/{content}/g, content);
};