/**
 * @func 格式化数字
 * @params num: number
 * @return string
 * 1218807 => 121.9 万
 */

export function formatTenThousand(num: number): string {
    const numStr = String(num);
    if (numStr.length <= 4) {
        return numStr;
    }
    let wholeNumber = numStr.substring(0, numStr.length - 4)
    const thousands = numStr.substring(numStr.length - 4)
    let decimalNumber = Number(thousands.substring(0, 1) + "." +
        thousands.substring(1)).toFixed(0)
    // console.log(decimalNumber);
    // 千位toFixed()进位厚可能是10 
    if (decimalNumber.length === 2) {
        decimalNumber = "0";
        wholeNumber = String(Number(wholeNumber) + 1);
    }
    return `${wholeNumber}.${decimalNumber}万`
}  