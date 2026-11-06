const fs = require('fs');

function decode(str, keyStr) {
    let q = [];
    let r = 0;
    let n = 0;
    let m = -1;
    for (let c = 0; c < str.length; c++) {
        let idx = keyStr.indexOf(str[c]);
        if (idx === -1) continue;
        if (m < 0) {
            m = idx;
        } else {
            m += idx * 12;
            r |= m << n;
            n += (m & 0x1fff) > 14 ? 15 : 16;
            do {
                q.push(r & 0xff);
                r >>= 8;
                n -= 8;
            } while (n > 7);
            m = -1;
        }
    }
    if (m > -1) {
        q.push((r | m << n) & 0xff);
    }
    return Buffer.from(q).toString('utf-8');
}

const key1 = 'FbsoDMrinPgeWXYaARmflJHw$_*0&79}`|4x(jh![~%]+"QK),;8S.CGO3<2UkB^5VI{?TLEyNvZc@d>#6u1p/qz:t=';
const arr1 = ['4oi|K!d4=YW9|Dy_lP.g@G67ZOnoM)nfg?1vnc$9cY5J:oG7;8BiF>2b','fW,0JSLSM','[lunMvc<LfHgTUH~o3(vF)]flf1LNT5(z)GDDy{7<e[','0Uyr.j{8RU}Sb',']lZ`h/5Wd2EQ=Tg','v2qD.uPbi','J`6C@c/>%B=;bp`%hj;nqT!x~<=f~yH4+}FCE.??_RAV!YX','*w5rbpS<h<{@>otH2BCPqTyr/X=(+1A0{BW}Z3#QYJcvYs','vlbZlc&mIPZ`?o7w[*jGXvVX9^NN,,}%.?hS`K9$M<{#TXp~owf`9','[Vs8Y6JimC5e)a5(6OXiu6iT[l,}KLy}zlwcQ@wbPlBN>xq~lCxgT.GXOl'];
arr1.forEach(s => console.log('1:', decode(s, key1)));

const key2 = 'unDfNbBPUmELH^avJV@1M>`W=(0!I/lrj~qdC:]$S<Y5K?[_TtZXo8,kG)y*A9O742;|%s#ecp}+Qw3Rx"{zig6&.Fh';
const arr2 = ['C/c,?:q6M,vMje;@ArV,e8K@H2/Rha`I5rME9qf8B4u%Q*:r6XlIFeqC]1)','+LwrEO{q.2IM}sf:7adj|cuC$MYV"N','ye/PO$H=!*EBNeB','~/?}uC;HJHMc3#Ur)fvo[9"da7[Q):(IsXI/=e3qR8HEq(D=ImVl=odsKUK'];
arr2.forEach(s => console.log('2:', decode(s, key2)));
