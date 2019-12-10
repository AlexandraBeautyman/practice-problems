// Find how many of each character from the source string appears in the text. Then produce a string of the characters in order of how many times they appear (from largest to smallest). Return the portion of this string that comes before the underscore.

let text = 'ftns_znzsaeeau_wr_zqxsseitsaaaxcezxhvh_jevbjvrdpfsrul_tyqaqjwuokvdjhmuayzqfcnkqlpdwaemheqekvwtzvmmexwssveifagkxvotgdqcifsbkbmipqivazbrnpltwlgquvzvgjrmytvof_xvkhddtxkvrrhhsunn_cpybhlkvktkwiqpogbzuemtowaoshyxhukbfnrrtdnijtgindrcwkdvjywnyxbylyzpomoskdhfntfcvdlacupmptpaziqhpajqnxyxcmbaloxsthybnqsmd_uwuomtlj_b_iyyywmyvpj__lvcbiklrlapbrfnzivlhgupvrgarfcmmbpomjxekaybkpmwyozkcldxymbuwooyyspp_ikhj_de_pcb_tsesbe_cont__ovyowernxwqcybrsnwb_onopgmnfhezfofjpadinufpfprnnbbr_ufkcenovnpkhbzgiihqsonfxkp_pdrvmf_bauuu_ioaidomgkprbzzfkidxmhevtwfnavxbxiukcsnqhoarejjgfygxxyuvcefgtwzbfecnmlwjnnjxkmajhakvhuayizvcshgaywmifoynzzienttuuwmdd_iqymyqsriefickvzvikelvckeuuokfhaeseqmrm_cpkmdthu_mnbu_way_tlrjnkytoextsvlfe_wcgzgwvkoqvnwcmxjtyjfpdpsdodpjhyhnjuzdmwsmiv_carq_kzglyepepkiseamadwnzfutojjpmlafouorbptamlcjuodlthimmssmzjznaecbypaumdwuetbv_dpjdhdqhclmiswusbibptnvn_zyuutgdtcwchb_erwwmdy_xxpdvtxrwotnsaigpp_uiyixorledeylbivfbstdhzzweqimcbtnnbyyypwaiaeehungak_mdjrfoppvovrlyui_rlibyxvgusfpurnffxmnudppgchhjmivgi_p_evmflkwc_jstxwxtcclvqyposfxoxhhb_zyfyxivpyhnzqidrubzh_dlfrrghayokgyotimnszgczpusrffayyrzsfn_owqmundgsfrxbglqvtgcjmoywhbwnxlbdqkbgvrwpsvvilqgkufu_meururrobq_zrrsbmioozqftbviljplkzhtsw_pkcgfjmixjiethrxfdxws_zurjayvyugzrl_rqixknlcclxhaqdljuypryubbu_yfyrbwtsyjbviusdxmuaeujvxcrqfaopyijeix_mkzsithazmvklvablhxzacfoqlgauqgbpxhldcmkcekdfbwobmuneaaikr_ocntplwnrjoyucowcekhpvkzjoqv_qvhjtf__rnjypnirmerhaojnuq_jbsndjsastgxhizgjgazabxqydjnlnn__vmtvsqxmbbuyglwioavonfztxtwipcfmgejxiuslamjqqbhjkgwmf_tfg_hxarnrcxtvqgkndcofxtdixthixkqvbrnnzwesnwwjyeebkrfjckbud_wqkyuqaauatacnujtelf_djhzcxqspadscfccmanzuocv_avmatigvioxenmjlvqyzgcrftkpfeviuripvlbpdatckiiwdbugibuttwglriwcgpbfcmz_vrdjaihkuibmqfisqsanbhjsmgtiudljhsnywcepmydhqbzelaotsfcbhaccrctmzinsmxd_mjtkfvs_vjjeyiygshmxgzskszhljm_vmwrpizgvslzkq_ccskqhbdxhypojjasycyvxwigklhwrrugzsmlotgzsztxloenoexulsighjlictnpemgeqzke_snpucycr_nqmfasp_ngfkelagipmg_ftglzolcnsdnwqctaclvxoynrranmrazoijagkepsdmccyroqlhrz_bqpirmwgkkgtjqscdqdcualohhdpkdmaoym_gpxqsu_vqeaggopucauptebrjvddnoarfwosak_fpqspfepsuifdkxkemhsrachirpuzddugugjukqwzfdmmhuratcgtgfkhnndkxbnkda_wlfdrqkquosd_pvhyjwysamnrwt_apzocrjatfsrwqchupjwpcwwgrlogyalotwntnz_f_xlnhkacsia_ndedhuemacxgmkqwgxlqudyfteufxsrfjmy_zuvbnprogxhqrnozvvmtsizsn_schptotqovvmkkrfatsssuwhcevoinortrbagzj_ufgddpiufqyqmohshgshmntcrtgtfgkzvjwgxbhzcipmz_twsfcl_uagaleivwjs_ngez_ccgmfzurlyqbibxcpg'


let sourceString = 'abcdefghijklmnopqrstuvwxyz_'


function findMessage(source, bulkMessage) {
    let sourceObj = {}
    // make source object with all the characters from the source
    for (let i = 0; i < source.length; i++) {
        sourceObj[source[i]] = 0
    }
    // update the values assigned to each character based on incidence in bulkMessage
    for (let i = 0; i < bulkMessage.length; i++) {
        sourceObj[bulkMessage[i]]++
    }
    // write a comparison function to feed to sort that returns a negative number if a's value is larger than b's, a positive value if b's value is larger, and zero if they are equal
    function compareValues(a, b) {
        return sourceObj[b] - sourceObj[a]
    }
    // sort the an array of the keys of the sourceObj (all the characters) by their values (incidences)
    let sortedChars = Object.keys(sourceObj).sort(compareValues)
    // make a string from the elements in the sorted array that come before the underscore
    let stringedChars = ''
    for (let i = 0; i < sortedChars.length; i++) {
        if (sortedChars[i] === '_') {
            break
        }
        stringedChars += sortedChars[i]
    }
    // return the string!
    return stringedChars
}

console.log(findMessage(sourceString, text))


// Commented out below is my original, verbose attempt. (It worked, but it used a lot of unnecessary lines of code.)

// helper function

// function compareFunction(a, b) {
//     let compareValueA, compareValueB
//     for (let key in a) {
//         if (a.hasOwnProperty(key)) {
//             compareValueA = a[key]
//         }
//     }
//     for (let key in b) {
//         if (b.hasOwnProperty(key)) {
//             compareValueB = b[key]
//         }
//     }
//     if (compareValueA < compareValueB) {
//         return 1
//     }
//     else if (compareValueA > compareValueB) {
//         return -1
//     }
//     else {return 0}
// }

// function total(source, str) {
//     let countObject = {}
//     for (let i = 0; i < source.length; i++) {
//         countObject[source[i]] = 0
//     }
//     for (let i = 0; i < str.length; i++) {
//         countObject[str[i]]++
//     }
//     let countArray = []
//     for (let key in countObject) {
//         if (countObject.hasOwnProperty(key)) {
//             let currentObject = {}
//             currentObject[key] = countObject[key]
//             countArray.push(currentObject)
//         }
//     }
//     countArray.sort(compareFunction)
//     let orderedString = ''
//     for (let i = 0; i < countArray.length; i++) {
//         for (let key in countArray[i]) {
//             if (countArray[i].hasOwnProperty(key)) {
//                 if (key === '_') {
//                     return orderedString
//                 }
//                 orderedString += key
//             }
//         }
//     }
//     return orderedString
// }
