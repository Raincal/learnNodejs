/**
 * Created by Yujia on 2015/12/1.
 */
import path from 'path';
import os from 'os';

let getTmpDir = os.tmpdir || os.tmpDir;

function randomString(size = 6, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') {
    let max = chars.length + 1;
    let str = '';
    while (size > 0) {
        str += chars.charAt(Math.floor(Math.random() * max));
        size--;
    }
    return str;
}

export function randomFilename(tmpDir = getTmpDir()) {
    return path.resolve(tmpDir, randomString(20));
}

export function isURL(url) {
    if (url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://') return true;
}

export function noop() {
}

export function callbackify(fn) {
    let argc = fn.length;
    return (...args) => {
        let callback = args[argc];
        if (typeof callback !== 'function') callback = null;
        return fn(...args)
            .then(ret => {
                callback && callback(null, ret);
                return Promise.resolve(ret);
            })
            .catch(err => {
                callback && callback(err);
                return Promise.reject(err);
            });
    }
}