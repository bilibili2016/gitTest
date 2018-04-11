(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('福建', { "type": "FeatureCollection", "features": [{ "id": "350100", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@K@KLDBLBBIHCAA"],
                    ["@@CBABCD@FJFCFBDHFFBB@FM@CCEBCCEMC"],
                    ["@@ACCBBDDA"],
                    ["@@@CC@@DD@"],
                    ["@@B@A@"],
                    ["@@MCKEO@ICCCAEAKBKAAIAC@AVFPCRBBFBNHNBVXJ@DADCHAB@@GBCL@B@BCCIEEBC@CHCACG@ABKPA@CC"],
                    ["@@@A@B"],
                    ["@@A@CDC@WH@FLXCB@DFDATBFH@HELA@CCACI@AFAD@BA@AH@DED@FDBHHHJDT@JC@AEOECGKC@EDOQIACBG@CC@CKC"],
                    ["@@B@BCE@BD"],
                    ["@@J@BA@AAAI@ABBD"],
                    ["@@B@@ACABD"],
                    ["@@B@@AA@@B"],
                    ["@@B@AC@@@D"],
                    ["@@BAA@@B"],
                    ["@@@A@B"],
                    ["@@BAA@ABB@"],
                    ["@@DA@CCB@D"],
                    ["@@MDFFAFBH@BCFCDBN@BHFDJJHFBDCDMCCE@AA@EHOD@HDDABC@ECCGDCEGAGACC@G@A"],
                    ["@@B@@AA@@B"],
                    ["@@B@@AA@@B"],
                    ["@@B@A@"],
                    ["@@B@A@"],
                    ["@@B@AC@B@B"],
                    ["@@BA@AAB@B"],
                    ["@@BA@CC@ABCCC@@BDDHB"],
                    ["@@BKCEEAEF@HBDHDDA"],
                    ["@@E@AFCBC@CCABACA@AACFB@@BADQAALDDAB@JBFADLADGAC@@PBHF@@DCAAAECEJCDDAFBDCDBLDBBA@AAADAAADA@ADBDACGDACADCAADEGKE@AA"],
                    ["@@ABBBAFEBQBEDQBABCJOLEHD^NF\\BLGFMH@FKD@LBPENB@A@CM@CAAE@CBA@CE@A@@ABA@EDAAKE@MEC@"],
                    ["@@@HCBEAEJAH@BDDL@DCFDNBB@@CFBDEEEGGG@A@BCEEEA"],
                    ["@@ABFLAB@DJDFNDDJ@BCDAFHBBFC@CGEBCKEA@BEIC@CCBADIIA@ACC@"],
                    ["@@FD@A@CAC@ACABFAD"],
                    ["@@C@@BDDD@@FBB@DAB@B@BB@BA@AF@@CFEIEIC"],
                    ["@@BDHBB@CGBGEADAACCCEACCC@@DE@@DHDBFHJ"],
                    ["@@@AA@BB"],
                    ["@@FFB@@CACC@AB"],
                    ["@@ABD@@BB@HACCABE@"],
                    ["@@BBJ@DBDAAEA@CAABC@ACCH"],
                    ["@@ABBBF@AACA"],
                    ["@@@DFJDBFFHDB@@ECCEGEACEE@"],
                    ["@@DHDBD@FADCCEFAFBB@HKBECCEDC@A@CF@@AGEECCCGABABABCAEBAABCAAA@GH@DDDAFF@BBADGBECABARA@CGCECBABBFAFJD@HBBD@JABCDC@EAI@AF@FBF@@F"],
                    ["@@CBD@BAA@"],
                    ["@@B@@AA@@B"],
                    ["@@DBBACAAB"],
                    ["@@DFDAACA@AEA@@F"],
                    ["@@DB@CC@ABB@"],
                    ["@@FNFAFFFACGA@ACC@EEE@@B"],
                    ["@@@DBBF@AECAAB"],
                    ["@@BDB@@CBAEEA@BH"],
                    ["@@BBD@@ACCDAE@@D@B"],
                    ["@@JB@@AAE@CA@BB@"],
                    ["@@BDDBBAAC@CC@ACA@BH"],
                    ["@@DD@CD@ACC@AD"],
                    ["@@FDH@GEEB"],
                    ["@@C@ADHBBF@@DAFBCEIE"],
                    ["@@BCAEBA@IECABBJEHID@FMFBBBBBFD@FFD@D@@HBBF@RADCBE@CGCEBAAGG@CBC"],
                    ["@@B@@BD@@CAAAA@BAD@@"],
                    ["@@BDAE@B"],
                    ["@@CFDDD@DAJ@D@BAACBACC@EAACBABKH"],
                    ["@@BB@AA@"],
                    ["@@DBBGAAA@CA@BDFAB"],
                    ["@@@BDFDBB@CGEA"],
                    ["@@@BB@@AA@"],
                    ["@@EDBDB@FA@EC@"],
                    ["@@CF@DADDFB@BA@CBBHBBABAD@ACAABEAAEAIB"],
                    ["@@@@@A@B"],
                    ["@@BBBA@ACB"],
                    ["@@DB@CA@AB"],
                    ["@@DDB@@ABACCABAB"],
                    ["@@ABBBD@@CD@@ACACD"],
                    ["@@BBDAAEE@BF"],
                    ["@@@BB@AA@@"],
                    ["@@JFB@CEG@"],
                    ["@@@DFBAEC@"],
                    ["@@@DD@ACA@"],
                    ["@@ABFB@CC@"],
                    ["@@B@B@AAAB"],
                    ["@@BDB@ACA@"],
                    ["@@B@@@A@"],
                    ["@@JHB@ACGCA@"],
                    ["@@DDHFBBDCFDD@JHDA@@KKCAACEBEGGCABBDCD"],
                    ["@@DFNJHBJOJEBACGIACCK@CACBCCC@CDADDP"],
                    ["@@ADBBHAAABCAAED"],
                    ["@@@BBA@AAB"],
                    ["@@HBBCAEGF@B"],
                    ["@@HHB@GIAB"],
                    ["@@P@@A@CECM@@DDF"],
                    ["@@IKGACD@FNLHJHB@EGM"],
                    ["@@A@CDG@CBC@EFIDBBAD@BDDFA@FDFD@BICKDAD@JNDBBJAB@BPH@BJJF@FDAHHDF@DAJDBDB@@GCA@CBCCMIKBCE@CA@GECE@IEE@@ABACGIEC@"],
                    ["@@BA@ACBBB"],
                    ["@@BCAAAAC@DHB@"],
                    ["@@DB@CBAE@@D"],
                    ["@@@@@@"],
                    ["@@FAB@BCAAE@CDBD"],
                    ["@@JNPJF@DABAAI@ADAVHZFFBHJJDF@DA@EEI@EFG@C@A@KAEECEAC@GBIJC@IGQA@BC@GEEBE@GCABADMJC@@BAHBD"],
                    ["@@DDBA@CCAAB@B"],
                    ["@@BAAB"],
                    ["@@DBBA@CC@AD"],
                    ["@@JFBCDA@AACIACD@D"],
                    ["@@@BDAC@"],
                    ["@@B@BAA@AB"],
                    ["@@BBDBAEAAA@@D"],
                    ["@@@DHBBMCG@AAAC@AFBN"],
                    ["@@BBBCA@AB"],
                    ["@@@BBB@CA@"],
                    ["@@@DD@AEC@BB"],
                    ["@@BBBAACC@BD"],
                    ["@@BBB@@C@AG@DD"],
                    ["@@@BB@@CAB"],
                    ["@@BBBCC@@B"],
                    ["@@BBB@ACAB"],
                    ["@@@B@A"],
                    ["@@B@@AAB"],
                    ["@@BDF@CECB"],
                    ["@@ABDBBCC@"],
                    ["@@ABDBDEA@CB"],
                    ["@@@BBBDAAAC@"],
                    ["@@D@AAAB"],
                    ["@@E@@FB@@ADA@A"],
                    ["@@@BF@DEC@ED"],
                    ["@@DDD@@ACAC@"],
                    ["@@B@B@AAAB"],
                    ["@@HHDAAACEE@@B"],
                    ["@@B@AA@B"],
                    ["@@BDB@BCCAAB"],
                    ["@@FBAAC@@@"],
                    ["@@B@AAA@BB"],
                    ["@@BBF@B@@EEACB@D"],
                    ["@@BDB@@EC@@B"],
                    ["@@CDBBDAAC"],
                    ["@@CD@F@BDAHA@CD@@E@AC@GD"],
                    ["@@FFB@@ACGA@AD"],
                    ["@@ADB@BCA@"],
                    ["@@@BF@AAC@"],
                    ["@@@DBCA@"],
                    ["@@@AAAADD@"],
                    ["@@DIF@ACCBCAC@@DCBALA@@DF@FG"],
                    ["@@BDD@CI@@AF"],
                    ["@@@@@@"],
                    ["@@@BB@@AA@"],
                    ["@@BHBBFA@AAABCCCBCAAA@ABC@@FBB"],
                    ["@@CB@BF@@AAA"],
                    ["@@ADBDB@FMC@CF"],
                    ["@@ADBBDEC@"],
                    ["@@@BBAA@"],
                    ["@@ADD@@CA@"],
                    ["@@AB@BBC@@"],
                    ["@@B@@AAB"],
                    ["@@@B@A"],
                    ["@@@BDAC@"],
                    ["@@@BBDFADB@CE@ACCA@D"],
                    ["@@J@BCCCG@@H"],
                    ["@@A@@DBC@@"],
                    ["@@@EAACFAAAFBBBCF@"],
                    ["@@EDADD@DABBD@@EEA"],
                    ["@@@BBFCBC@A@ERBBJ@FBF@EFE@@DDBN@HED@FBCFFBBDD@JC@CEEBCAANCBCB@@CKEEEOAGCADE@ME"],
                    ["@@@BBBF@@CAAEB"],
                    ["@@@BBBBECA@D"],
                    ["@@ABBBDCCA@B"],
                    ["@@GDDFHABAACCA"],
                    ["@@BDB@DA@CAAA@CD"],
                    ["@@DB@CAAAD"],
                    ["@@ABBBHACAC@"],
                    ["@@DHH@BA@EFBBA@ICCACCBE@@FEF@D"],
                    ["@@DFHDBAACCCCACB"],
                    ["@@@DFBD@@CAAGA@B"],
                    ["@@B@@AA@@B"],
                    ["@@@DF@ACDCAGA@@FCF"],
                    ["@@@DDBDCBAAAE@AB"],
                    ["@@@BDAC@"],
                    ["@@DBBAEAABB@"],
                    ["@@ABBBBAAA"],
                    ["@@DBB@AAC@"],
                    ["@@@BB@@CA@@B"],
                    ["@@B@AA@B"],
                    ["@@@@@@@@"],
                    ["@@ADDADDDB@GEEE@BF"],
                    ["@@ADFBFBDA@ACACECBAB"],
                    ["@@BFFGCAA@AD"],
                    ["@@AB@BDCA@"],
                    ["@@B@@CE@AD@@F@"],
                    ["@@CDM@@BDBAFFBBDBB@FFDRFLDAK@ICEHKACGACBABC@K@"],
                    ["@@DBDA@CEAAB@D"],
                    ["@@DDAEA@@B"],
                    ["@@CCA@DLB@DCBCE@"],
                    ["@@BBBCCAABBB"],
                    ["@@BBBAAAAB"],
                    ["@@@BDJDBDDDACEBCDAHCBAEACDQ@"],
                    ["@@@DDAAAA@"],
                    ["@@AB@BFCA@A@"],
                    ["@@@BB@AA"],
                    ["@@@AAB@@B@"],
                    ["@@DBCA"],
                    ["@@@BB@@CAB"],
                    ["@@ADD@@CA@"],
                    ["@@AB@DDCAA"],
                    ["@@AAABD@"],
                    ["@@ff¯BGEOBGBCLKbqBEBOBCRORQBAIKAEBEVEZ@\\HjRXJ\\@FA@COeCEe_aUGEAOEEKAIAmDQEG@A@CRCDGFSDG@]GGBILENADC@EAIEIYWIACBMLOPIFI@_YCYAmGECGG@KDGRQBE@EAGUMAC@UAIEEoM]_YISKAM@MFILIFcFKBCNEPARM@ECEJYR@BWHMJyH]BEFAHBdNH@F@NERGLODMAiCUIaYOuCIGCSC{CMCICEEEGGWGeAeD{DHMBCH@DOAGCEQKEIEEMGCCEOCAAEEA@EJCBGFC@AQcQIUAJaASAKMEKBGEAE@IHMDUAIBA`BNMFAJFF@^EFBHJJ@FCBGAQFM@GACQSACDKJ@REVBTCJDJDPNJBL@DAHMEQ@ATOFQHC@GAGHWBKCGKKAKDWFELKJM@E@EGG@GBADAJ@FDTVLDDABA@]BAlJHV@BEB@HHFBFVHFPDDTFREF@JDBD@DSHABDLCH@F@DH@@V@LKXELcPALIJAH@JJHH@BJLLBHXND@FAD@DBBPDHHFTJXFTLBH@@HAjZF@FAFG@KCEYa@C@GDOJMDAJA\\HLAD@HIFCH@PKPGFG@ECCECCIIK@ADCH@PMhKN@ZLH@DA@EE[GKYUKEGAI@CDGPGDIBiSGECCEUAWDODGBCXCDCDIDEBANDDBB@JCDIPHBDB@FEAKBIKS@KEEK@EBABCLCFAB[FGAECCEKCEBIAKIKCc[IAGACCEO@MHCN@FCLAFC@GMC@KEABCACE@EBCAAB@DA@GCE@SPCHAHGDCFSBIFKAKPKDW@C@@B@DVD@FAHEBAEM@CBEHGDCD@DNR@FG@CAC@IL@D{OAA@GCKCIYMG@CC@CHEPADAH@BBBHD@D@JILA@FAHBHF@F@FBFCDE@SDI@AEG@MEAIBGA@KAC@EJ[DC@MDA@AGEBEAAA@GHC@SMQCKE@CDAVBTHHHF@BA@CCMGIECEG_IWBABMBEAMIIAEBCHKN@HDBLBQXIV@LBFJLDRCFAPIDCH@LHJCDIFADDH@NCJGFMAEAEECEBEGUHIFADADE@IBAH@DBDEDKDI@AGEMECIAEACIEGBECAKEABG@CEEIAMEE@@JDF@D@HEBEBO@KAGIQEEQC@QHCD@JJP^XDD@HENQVGFGBCDBNJfCFGDE@GA]BCACIGOQSG[EACDBTCJON@DPJTT@HIFA@AHDVBFHHJ^AFGDMBI@OSAAEAiHEDATEFsVIFIDIAEIGUKsAODOJYJO@EBQAICCI@CECBCDGHO@IGG[IEIDM@OASBWTOJKVA`JZJRHFGDMEIBEF@TA@o]AIO@EAEJA@GACBADFJ@DELCD@DDBLANCD@LVBFENB@JCF@DDDBDDAHFP@FGNMT@PIJAPIGGCQOIGCCADAHIBIFICGBCBKRMDCRSTBBBBJBFGFCB@BHCPEB@EAAC@C@DN@DADEBIB@HBB@BBDGDALMFGFMR@HAH@JJTFPFJANFBHAJ@BBCFIBIJETBDNBDBBDCHADGAAHADEBI@@HIAAABAEC@BCB@A@AABBHHFPNJDJHLT@DABIDG@EBEBGHMGEHkDEAKGAACBCLA@CAEGGCKDCD@HEC@EgGMK_BSIACmAIGKDMAEEEIMCCCAGOGANDTDHBFCPEF@D@HDDF@DB@DADCBC@MG@GGGG@ICIOMMAKIACAQCGECBCGCCCEKGIIEAEEC@ABHL@FGBCCO@OGC@MDADEBG@QLEHADW@EBEGOI@AHABAMSUMWIICMBIDMNCBCA@CBEBGCGIGMAIMEEE@GBADL`@NCBUOI@EGCAKF@HA@CCIFAJSAMBED@BBBHFON]FO@EAI@ECACAOICEBIHIDAJABC@CA@EDMCAEDCA@CBOAGEAGAADELABGACA@MCGCAGPEBEAAC@CJIGEC@INUKIFOMCGDEEEGCYAEBCLKJGLGFC@IJKJALUPAJWFMJGJA@CBKEGBIFQRGV@LBBARCHIHCH@JG`EJSHGFKRMCEF@FVXDP@NDLD@LEHDLNF@HF@DEJIZABKFADBDJBCLDFN@BDCJV\\LNHC\\ULOFAFCBCI{BAJHP@FHBZCFAHAFC@AFBDJHHBPINALCP@JO@AACD@HB@BKPCJEBHHALBFNRDJAFG@AFDTHLAHDFKLBDDFDFEF@FEDJTBHCXGF@L@BH@ETBFJJBZIPAHAHBB\\CpBnHJ@XSRFONBHJHFNCBGCGBAFE^CBEFAN@LAFFHFLAFDD@FCBSGG@GFGNA`FL@LCFBD@LD@PGDBDDITDJDHBDCFBDABBB@BF@FDBB@DBB\\BTKFLIHKTEFPLFHDAhANINGLANJD@HCBDDLFHBDCDHB@F@NK`BHABHJVJDDCJH@D@@DD@BADCF@DBBD@DABKDBZDDNJFFHDHHR\\|AFABA@ENE\\EFB\\RHDDVDJBJEHQLE@EBCDGLIHDHEFGFQBEDAFDF@JJBELJPEDSH]PGFHNBFCRDJ@RBFHFD@HJRHBHAHIBBLCDEB@B@HDHVAFBD@DCHAT@FEFIEKBAJAPENEDG@]OK@CXSDEACC@@E@KFKJGJAL@XHbTJNBLPHDD@J@D\\HDDHDbJLAVBF@PSHEN@LHH\\ALEFOAEFAHDLPNDVFJLFRH`BFAJGF@DBBDFB@DEHBDFF@DOP@DDDFDD@LEHF@BCJBDJJ@DE@AD@HHBBDBNFBJED@@DANHD`CJ@DBNND@DADENIFEFE@EACIAKGEGAEDCRGL@PDB@DCDAJBBB@LDBD@@GDCAEFGACAAJADEBCFCAIFG@CDCHBFABB@DDBT@DAHGBBBHHBF@FCHBDAD@BFJJD@H@NFDDJNHDFJDBNEDENYHG@SDCNSFAD@ZHJJJZDFHAVIJGBCJCDDHHRVXFBF@VA@GFABAAIE@CE@CB@HD@CFCBFFBB@DAHDFH@FJFJAFFAFED@B@DBBH@DC@LDAH@DCDAVDFFJP@NBFPBNAJCJADAH@JDAHYJABBBH@BB@DDBLANOFANBVDNFT@HADCF@FB@DFBTKLC@EXBDCJKAC@INQJCBILELQ@AKIPUDCN@^KBC@EECDCDAJDFANKRBHGF@HFF@NEFCDC@EFA@CB@NABAAE@ADAF@RFNHDAHBPEJ@FBBH@DDHF@FENF@DPpDDFBJ@NJVEH@FAXKJDTPDBGF@DDBLA\\DJATMJCDGTKBGJM"]
                ], "encodeOffsets": [
                    [
                        [121678, 27068]
                    ],
                    [
                        [122867, 26893]
                    ],
                    [
                        [123104, 26891]
                    ],
                    [
                        [123102, 26881]
                    ],
                    [
                        [122918, 26872]
                    ],
                    [
                        [122887, 26845]
                    ],
                    [
                        [122899, 26847]
                    ],
                    [
                        [122808, 26762]
                    ],
                    [
                        [123295, 26793]
                    ],
                    [
                        [122500, 26759]
                    ],
                    [
                        [122597, 26600]
                    ],
                    [
                        [122653, 26290]
                    ],
                    [
                        [122432, 26267]
                    ],
                    [
                        [122495, 26224]
                    ],
                    [
                        [122330, 26023]
                    ],
                    [
                        [122337, 25968]
                    ],
                    [
                        [122386, 25960]
                    ],
                    [
                        [122568, 25912]
                    ],
                    [
                        [122491, 25946]
                    ],
                    [
                        [122489, 25944]
                    ],
                    [
                        [122479, 25933]
                    ],
                    [
                        [122477, 25932]
                    ],
                    [
                        [122575, 25918]
                    ],
                    [
                        [122572, 25914]
                    ],
                    [
                        [122600, 25884]
                    ],
                    [
                        [122600, 25866]
                    ],
                    [
                        [122778, 26197]
                    ],
                    [
                        [122515, 26757]
                    ],
                    [
                        [122816, 26587]
                    ],
                    [
                        [122847, 26569]
                    ],
                    [
                        [122779, 27057]
                    ],
                    [
                        [122762, 27045]
                    ],
                    [
                        [122794, 27053]
                    ],
                    [
                        [122756, 27019]
                    ],
                    [
                        [122755, 26998]
                    ],
                    [
                        [122828, 27009]
                    ],
                    [
                        [122848, 27000]
                    ],
                    [
                        [122971, 27014]
                    ],
                    [
                        [123107, 26964]
                    ],
                    [
                        [123388, 27005]
                    ],
                    [
                        [122776, 26927]
                    ],
                    [
                        [122780, 26924]
                    ],
                    [
                        [122774, 26924]
                    ],
                    [
                        [122896, 26865]
                    ],
                    [
                        [122900, 26866]
                    ],
                    [
                        [122880, 26870]
                    ],
                    [
                        [122857, 26818]
                    ],
                    [
                        [122855, 26792]
                    ],
                    [
                        [122703, 26916]
                    ],
                    [
                        [122688, 26897]
                    ],
                    [
                        [122685, 26889]
                    ],
                    [
                        [122705, 26880]
                    ],
                    [
                        [122597, 26897]
                    ],
                    [
                        [122598, 26867]
                    ],
                    [
                        [122549, 26752]
                    ],
                    [
                        [122532, 26772]
                    ],
                    [
                        [122538, 26773]
                    ],
                    [
                        [122508, 26742]
                    ],
                    [
                        [122877, 26603]
                    ],
                    [
                        [122846, 26566]
                    ],
                    [
                        [122564, 26378]
                    ],
                    [
                        [122535, 26397]
                    ],
                    [
                        [122528, 26369]
                    ],
                    [
                        [122546, 26375]
                    ],
                    [
                        [122686, 26379]
                    ],
                    [
                        [122731, 26321]
                    ],
                    [
                        [122734, 26322]
                    ],
                    [
                        [122700, 26282]
                    ],
                    [
                        [122700, 26286]
                    ],
                    [
                        [122708, 26284]
                    ],
                    [
                        [122643, 26330]
                    ],
                    [
                        [122631, 26281]
                    ],
                    [
                        [122600, 26328]
                    ],
                    [
                        [122566, 26286]
                    ],
                    [
                        [122561, 26282]
                    ],
                    [
                        [122575, 26281]
                    ],
                    [
                        [122577, 26283]
                    ],
                    [
                        [122534, 26303]
                    ],
                    [
                        [122539, 26306]
                    ],
                    [
                        [122511, 26289]
                    ],
                    [
                        [122521, 26281]
                    ],
                    [
                        [122483, 26327]
                    ],
                    [
                        [122477, 26331]
                    ],
                    [
                        [122496, 26319]
                    ],
                    [
                        [122487, 26291]
                    ],
                    [
                        [122494, 26291]
                    ],
                    [
                        [122458, 26284]
                    ],
                    [
                        [122450, 26243]
                    ],
                    [
                        [122414, 26223]
                    ],
                    [
                        [122416, 26230]
                    ],
                    [
                        [122478, 26197]
                    ],
                    [
                        [122483, 26194]
                    ],
                    [
                        [122473, 26208]
                    ],
                    [
                        [122535, 26263]
                    ],
                    [
                        [122567, 26229]
                    ],
                    [
                        [122588, 26246]
                    ],
                    [
                        [122671, 26268]
                    ],
                    [
                        [122676, 26263]
                    ],
                    [
                        [122686, 26264]
                    ],
                    [
                        [122691, 26237]
                    ],
                    [
                        [122726, 26231]
                    ],
                    [
                        [122737, 26209]
                    ],
                    [
                        [122786, 26210]
                    ],
                    [
                        [122722, 26189]
                    ],
                    [
                        [122715, 26193]
                    ],
                    [
                        [122751, 26184]
                    ],
                    [
                        [122716, 26129]
                    ],
                    [
                        [122701, 26140]
                    ],
                    [
                        [122691, 26129]
                    ],
                    [
                        [122691, 26122]
                    ],
                    [
                        [122699, 26124]
                    ],
                    [
                        [122696, 26122]
                    ],
                    [
                        [122542, 26118]
                    ],
                    [
                        [122578, 26154]
                    ],
                    [
                        [122582, 26156]
                    ],
                    [
                        [122583, 26146]
                    ],
                    [
                        [122580, 26168]
                    ],
                    [
                        [122590, 26165]
                    ],
                    [
                        [122580, 26144]
                    ],
                    [
                        [122571, 26142]
                    ],
                    [
                        [122568, 26189]
                    ],
                    [
                        [122479, 26187]
                    ],
                    [
                        [122495, 26125]
                    ],
                    [
                        [122497, 26125]
                    ],
                    [
                        [122499, 26129]
                    ],
                    [
                        [122500, 26143]
                    ],
                    [
                        [122545, 26107]
                    ],
                    [
                        [122532, 26091]
                    ],
                    [
                        [122519, 26069]
                    ],
                    [
                        [122539, 26058]
                    ],
                    [
                        [122556, 26069]
                    ],
                    [
                        [122511, 26041]
                    ],
                    [
                        [122587, 26026]
                    ],
                    [
                        [122681, 26067]
                    ],
                    [
                        [122677, 26060]
                    ],
                    [
                        [122686, 26053]
                    ],
                    [
                        [122695, 26033]
                    ],
                    [
                        [122691, 26034]
                    ],
                    [
                        [122693, 26038]
                    ],
                    [
                        [122818, 26043]
                    ],
                    [
                        [122753, 26083]
                    ],
                    [
                        [122747, 26086]
                    ],
                    [
                        [122725, 26100]
                    ],
                    [
                        [122643, 26003]
                    ],
                    [
                        [122650, 26004]
                    ],
                    [
                        [122634, 25999]
                    ],
                    [
                        [122631, 26000]
                    ],
                    [
                        [122628, 26000]
                    ],
                    [
                        [122620, 26011]
                    ],
                    [
                        [122548, 26022]
                    ],
                    [
                        [122539, 26005]
                    ],
                    [
                        [122542, 26007]
                    ],
                    [
                        [122602, 25961]
                    ],
                    [
                        [122588, 25985]
                    ],
                    [
                        [122578, 25962]
                    ],
                    [
                        [122579, 25943]
                    ],
                    [
                        [122579, 25951]
                    ],
                    [
                        [122570, 25955]
                    ],
                    [
                        [122565, 25953]
                    ],
                    [
                        [122556, 25945]
                    ],
                    [
                        [122648, 25899]
                    ],
                    [
                        [122646, 25905]
                    ],
                    [
                        [122632, 25906]
                    ],
                    [
                        [122619, 25901]
                    ],
                    [
                        [122600, 25885]
                    ],
                    [
                        [122442, 26033]
                    ],
                    [
                        [122436, 26036]
                    ],
                    [
                        [122438, 26056]
                    ],
                    [
                        [122438, 25999]
                    ],
                    [
                        [122455, 26007]
                    ],
                    [
                        [122420, 25975]
                    ],
                    [
                        [122403, 25968]
                    ],
                    [
                        [122376, 25971]
                    ],
                    [
                        [122375, 25972]
                    ],
                    [
                        [122375, 25975]
                    ],
                    [
                        [122470, 25938]
                    ],
                    [
                        [122346, 25914]
                    ],
                    [
                        [122355, 25916]
                    ],
                    [
                        [122358, 25920]
                    ],
                    [
                        [122351, 25932]
                    ],
                    [
                        [122342, 25940]
                    ],
                    [
                        [122331, 25960]
                    ],
                    [
                        [122336, 25979]
                    ],
                    [
                        [122230, 26022]
                    ],
                    [
                        [122230, 26020]
                    ],
                    [
                        [122245, 26043]
                    ],
                    [
                        [122256, 26046]
                    ],
                    [
                        [122280, 26060]
                    ],
                    [
                        [122299, 26064]
                    ],
                    [
                        [122846, 26708]
                    ],
                    [
                        [122684, 26856]
                    ],
                    [
                        [122684, 26858]
                    ],
                    [
                        [122686, 26859]
                    ],
                    [
                        [122689, 26858]
                    ],
                    [
                        [122586, 25928]
                    ],
                    [
                        [122556, 26196]
                    ],
                    [
                        [122676, 27184]
                    ]
                ] }, "properties": { "cp": [119.306239, 26.075302], "name": "福州", "childNum": 197 } }, { "id": "350200", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@C@@DJ@@AEA"],
                    ["@@QDKHAHJPLBJIFCDCBE@GCCGA"],
                    ["@@BFF@@CCACA@B"],
                    ["@@JDFFJ@HCFDDABAAAC@AEMAC@GCGBCF"],
                    ["@@FDJC@AEBECAGA@AACB@BHDAF"],
                    ["@@FcAIO[MOMKQAcDUFaNIJKTMNAFCP@HHNFjTxBHJXJNHHXNfHJDNBFAFEJQFC^ClQNKFIDOB["],
                    ["@@iDoCEBSHKREDQBEDONKTCLHV@@CBABHHBHAJBBG`E@AFOHCHCBEAEBADCPEHKHCBO@GD@LBJBDGHAFDRFF@HEHEDMHMLMHADJFDJ@J@FALDBBBNCPDRADBTfJHNFLLJDDDDNDH@DAJLDDF@FCNK\\CNBLABMFCFIhARFLDTDHJDFBALHJDLBNAXALGNF@DBBF@FABAFDJAFFTIFCBSCG@EBWbMHQLBJBDFDH@H@DCJGFKBAXJTEHIHQHEDGDAHHF@ZLLDBBONAD@DLNL@RCDBBFCHOJSDGF@FDFHBZMHADDBPFBXGLBFADEAQDGLKHMFEHAFDHNH@DABE@SDMFAPTrXBAF@LTLHTLFBLEN@LB@FJDN@JADADEDAD@DDJCNBRUAAKAEM@EFGTKLCHGTGBIACEEBELODIDAFAH@FBDLHBF@DGFBDADCF@FBHHTDH@JERCFCHWFCHMLEHEHACGHEAEGIBCRMD@BFDDDBFCDE@KA@CBCBCACE@EFEESCCC@CDSAEE@EDCFUDANADCJMAG]iAEDCHGXM@EAGBC\\QA_OMHWCQEEIAEOCCEE@CDIDBFBJNB@BC@GCQLGLEBEBKBAJ@DW@]IUEGOGkGGsMkGl]ZgZOZIJKNICOGaOQMMUOGGIIOIKUO}AEQSGSEu"]
                ], "encodeOffsets": [
                    [
                        [120993, 25143]
                    ],
                    [
                        [120906, 25022]
                    ],
                    [
                        [121027, 25035]
                    ],
                    [
                        [121218, 25145]
                    ],
                    [
                        [121249, 25142]
                    ],
                    [
                        [121042, 25093]
                    ],
                    [
                        [120883, 25005]
                    ]
                ] }, "properties": { "cp": [118.11022, 24.490474], "name": "厦门", "childNum": 7 } }, { "id": "350300", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@ABG@DFAFHDDH@B@BF@@CHBBCAAHCAGDC@CE@GBMC"],
                    ["@@@FAAGDBNDFD@@EBA@CBCB@DBDAGGA@CC"],
                    ["@@F@@ACAAD"],
                    ["@@EBMLCF@FHBLEDEDG@CAAAA"],
                    ["@@B@A@@@"],
                    ["@@BBB@ACAB"],
                    ["@@BDD@CCA@"],
                    ["@@BBB@ACAB"],
                    ["@@DBFAFCCCE@ED@D"],
                    ["@@KDADDBDADDHCBA@CGA"],
                    ["@@T@BA@AECC@KFG@@DB@FA"],
                    ["@@@BDFBCDDDABCACMB"],
                    ["@@@BBBF@BAJAACB@@ACCKAGDABBDDB"],
                    ["@@FD@BD@@GI@A@BB"],
                    ["@@@FBBH@BA@IF@@EBCC@CDAACDAAC@AFBD"],
                    ["@@AEEBCCEAADDJA@A@@FB@FAF@@BBBFGAC"],
                    ["@@FBDAAAC@C@@B"],
                    ["@@CD@BFBBHH@B@AC@AJ@CCBA@ACCA@CDIA"],
                    ["@@HDBCGAAB@@"],
                    ["@@FHADDBDIAGEACF"],
                    ["@@@BEBAFDBJLBAAGH@@CEEAMGB@DBD"],
                    ["@@OJ@FJAZK@AAEC@MF"],
                    ["@@ADBFFDHABEAAEIA@E@BDAB"],
                    ["@@BHFBBBD@BEACGCDC@AA@GF@B"],
                    ["@@ADCBBBD@BC@AAA"],
                    ["@@BAACABBD"],
                    ["@@@BBDAFDBDBBDPI@C@CGEIAGF"],
                    ["@@RDDAACCACEE@ACAHIFBBFA"],
                    ["@@YDI@SFETDJFFBFOR@D@HDDD@JEHADDBHDHDDD@JADB@HBJFHFBJEDEBIAECA@CBAFCFBBBABBDDBJAHCDEAQBSDIJER@BGDEbKL@BDDHDFDABEBAHBDED@FBFHHDPAFABC@CECA@AAFGEEEAIAIBEFCACEDQ@AMDCC@CNSCGDC@AICGAW@QGA@ABBHADCDGFODAB@FCD@DDFABKDG@GDIDGAGHSJ"],
                    ["@@FJFFFBH@LCJHnBBDTJ`ANLhH@FFD@GDCLCHDFHDBB@DKDABBLHNBdCFGNHHGFAFAH@JCBAAGIOIGICOMGEAEBC@DDA@AFDABBBJB@GJ@FABCBGHBBCDGACCAMAACFSJIJADEAAI@GBEABMEIEOIS@IBG@GNQHENEBKHCAC@AAA@GJAFABC@CCMD@D@BB@FFADOAGA@EDEHIAAAAATSDQNCLQDAHAJDJEJADKDDJHRPHDJHBOJI@ONSHM@EEOBGAAECCCE@IDA@FMAEKUC@MDKBCC@ADCFK@CEIBCDAHBB@FIMIuSqYEGOUKkAaBELCJBNFD@HE@MDCpMPAFDDBXEHKBC@IFCBCAKBGPS@OJG@EDAFAFBBJCZBDD@F@HATIHATBJBFBPAFCXgnkHGVEN@HIVGH@PHF@BAEIAIAKBMACCCYIIEIA]BGACE@IEAQDMHGBKEC@EFI@EAAEFI@CAC@EFKBKDKJMNEDGCCGAEEIMCAC@ADEAYQGMOEEB@JED@DDFADqVIFEBWCWOSEQ@ODGFOHEDEJcZGJCHBLAHEDMCEGEIMECC@EGGAIAAEB@CJYLOR@NIN@DCDGAMGECBAABEFCHEF@B@JHN@FCDGCeBG@EK_@KAKIAIKKECAAI@KHMEEAEBCL@BC@GAAGAAGGCAGGICUICFKAE@@K@C@@HBJALGDEFKBCDBDHD@BCHCBODOLADFDJ@ZIHBDDDD@DO\\EHBDDDJ@HPLFJJFBTBDB@DAFIFG@©FMQSFSNGNUHKJM\\AVBLANDPDDFFB@TIRCJBHJPXBJBbDHLHBHU\\_EI@GAIIEASBIAACCOAEEEOIKAKDICE@AFBNQREH@JDHHJFDBH@LBJHHDNDBLGFGBEBAHALDFHDDDHAHEHKBMAOFIBGCIIC@Q@IBK@GDG@CCCGCAiSGAKDI@MIGMIE[CUBACICBKAGGGQAECGIC@ADDH@FOBE@BGCACAIAEASBICGBKCEBBHMEGCQECCEKDQ@AAAMAKBEAGEQEICGBEKWYCBM@IIEGGC@ASAA@AEC@BHC@DJCFBJOFEHEBCNDNKJ@BBFFBL@DFHDBFFF@B@BECAFG@@EAA@RAHBBF@@FEFBBHFBD@BCBADAH@DJRLF@BYREFGCGGCAK@ABCBEQA@CFIFAHGBBHFFTDFFBJFHKPDHMDSEG@MFEAMOEACBI@EBIJA@CAAEA@KNA@OEI@IDCC@CE@A@@GCB@ADGAEC@AFIB]@ACCAEF@BS@BLGNAHFHFL@FELCBECCECIGKA@G@ADAHBFFFDJDDN@ABIFBZJJDD@HQJ@JAFCBUNGLEBK@AD@FJRADSFEP@VADCBICMBA@AJILERADDHNTFNJBBDDP@HADC@KCC@CB@BJDDDBFADOFBLEF@JJH@DGB@BJLJFJPLNLLBBCD@DFFJDZNBR@DABBJjpBLLFBHLFADADFFHPEF[LCBABJLRL@DADEFFFCFDHPNJEVLJMD@HFIJ@DBDFBFAHODBDH@NDBHBBAFKBCHBFBBHAP@DDBFCDBCN@FDBD@BABIJCJGFAJDBPDFdD^EDCLIGEAA@AFCNATBBIJEDDB@@GJCF@FHL@TPDA@MK_BCHAF@FFJNNBJHDHAHAF@DDBDANMJCNAJDXJVNNTABGB@BPJFHFAX@BCFGRKH@FABCNCD@PHP@DDHA@EGKBAD@FFFBJJLHDFDDDHDAHFRDDBJBBLNNJPJDH@HH@HFDLDDABC@CCAE@CC@G@CFEDOAECGCSBMPHBHDDND"]
                ], "encodeOffsets": [
                    [
                        [122386, 25872]
                    ],
                    [
                        [122237, 25718]
                    ],
                    [
                        [121933, 25635]
                    ],
                    [
                        [122329, 25582]
                    ],
                    [
                        [122027, 26000]
                    ],
                    [
                        [122033, 25986]
                    ],
                    [
                        [122061, 25979]
                    ],
                    [
                        [122434, 25772]
                    ],
                    [
                        [122266, 25758]
                    ],
                    [
                        [122516, 25833]
                    ],
                    [
                        [122474, 25841]
                    ],
                    [
                        [122480, 25849]
                    ],
                    [
                        [122461, 25848]
                    ],
                    [
                        [122461, 25821]
                    ],
                    [
                        [122449, 25855]
                    ],
                    [
                        [122450, 25871]
                    ],
                    [
                        [122423, 25772]
                    ],
                    [
                        [122463, 25792]
                    ],
                    [
                        [122389, 25759]
                    ],
                    [
                        [122350, 25860]
                    ],
                    [
                        [122207, 25920]
                    ],
                    [
                        [122233, 25935]
                    ],
                    [
                        [122120, 25960]
                    ],
                    [
                        [122130, 25957]
                    ],
                    [
                        [122231, 25718]
                    ],
                    [
                        [122143, 25765]
                    ],
                    [
                        [121875, 25778]
                    ],
                    [
                        [121906, 25704]
                    ],
                    [
                        [122339, 25802]
                    ],
                    [
                        [121825, 26342]
                    ]
                ] }, "properties": { "cp": [119.007558, 25.431011], "name": "莆田", "childNum": 30 } }, { "id": "350400", "type": "Feature", "geometry": { "type": "Polygon", "coordinates": ["@@A@CFUPGBQAQKC@EDCbADKF@FARCHIFEBIAEIK]IEK@O@GHIXEDCAOOEAGFGNI@IAIIGIAGLSBECEECIAIDMAEECIKCGEGEOLIJIHM@EEEKKGQCOBGF@JFF@HCBODOJIBMMGCO@QBKEQEEGE@IDOKKCQBGAAG@GHCHCBCBEAEICKGKMIGE@EDEHGHC@MCG@EFEHABC@CAAGWCAA@EFCBKJAFEBCLGDIIMCD@HADGIEACCCMIE@IEOAC@CHC@CCIBOEGAMOEE@GBGFC@AAAEAOAAEDE@@A@GBCJC@IDGFEDE@GBCNBFA@AGGBCHEDIBALRD@FA@IMgAMEGECWAKGC@M@WCEC@ABCACK@EDG@ACHE@AKCEECCCM@CBAH@NHJ@BECEHQFDFALD@AFCAGH@HG@CCCJADEF@AEDEFAAAC@BCB@BCB@FNDEPAPHTDJNLCLBDABADMBOAGBECOCICCGCAEDKGEAA@MACOGOMCEQGACMSYGCE@KAGBAD@DAACCACBKLULK@IEICI@EKIACKGCQEEBCAEEAAYAA@@ECAYBSGC@MBUMIAEBIFUdMJEFK@SOCAIDO@CCBKBQNMDEBGACC@GBKFMNIHINC@EEEBCNEFI@SEMDEDADFB@DABQAIBCCABICC@KFCFQGCEGR@XBHFJDPFPBBH@HHRKLKHAD@JPRPJNJlAJG@CEMBcGKLK\\U\\YVMHGNGTKTQJOBECG@GC_UOIKAI@GBGJKVBFLJAHOPIPCBKBI@ODOHEFCPKTEFE@GGG@QGKIKSGCA@@HIH@NGNBFPLBHABQGGBCNEBG@GEOCO@CC@CHEFDHCFC@CAECCKEOISoKgIG{M]@EHBJTdDJANCN@TEjEHACBSAGAASNCVGPBBJFDDATEDGf]FM@KICQBMAQYEWI]OQCM@MAWKKMASECAKMOMYLGZFPBJALQBIEMg[SQaQCMAQGKEIMIIWMECC@IQU\\AACCAKCCEIEIFQ\\EBGAACEEEAGBBRDN@TSbYXGLCXOPwNQAAAGAKAK@CPKP@BDBHCF@BLG@AD@FABG@@HE@KCCBEB@DTNBZ@FOZCBA@A@DOCAQRADBDPFFHLB@FMV@D@FJFBD@DADKLBLBF@HENQRW`KhC^GPOHOBWCUCQGKGeGGJSFKJQBOAWIWYO[CCOGGKM_IGODMEOGcGUNMPg\\INF\\FPJRLNAFIDSA[OQGOLGjA`CJIJOHQFYTMDUBMVEDKAOPU@GBCFAZDLCJGF@VFRDFAFBDFFEBK@ABDHSNKDGkIKGCKAGDGFKDGBMOIEQHgJ]NG@IEMM[Q[WK@GFGLCPB`CLIJOHwFWFOD]PIHFLCPDBLDTJDFBRDDFBTNPFTPJLLBDF^RLLFFBPANCHADIH@JDHGJ@FDJAF@DEBEHBDABB@IFO@CGC@CCC@EA@CB@AAEACBWKQAGBCCADBDHFGHCAGOE@C@ADCFUDIH@DDFHFAFBFBLFD@BE@AFDDABEACD@DB@JB@BGFBF@@EBAACCF@@AAAG@IFHDD@FNCNGNCNVN@D@FAFEF@BDJHHAJDFFDbHDDDL@JSN^DBBPLBBD\\JHFB@@DDJFFJFRLHPFN@DFPJL@HDBDCFGDFL@PBJFBLAHHBJ@LFNHD^CBE@IVGJBFDDE@GHO@MIYDA^LL@FA@CDAFANJNBFBBJNNDTMXBHALBDDBAJBHHLFFFFNDFDDFBJ@JBHFFFDBDAJDL@DMAUBSCMNCAIB@BHNEBMDCFNJFJ@FCDK@ADED@HQDBJ@JCFMFONIFQHIFGDAFADDNDDH@NLLjFrFN@PHNEP_BIRIFGJadGLGdFZNNRHNJBHXVLRFNANINKVGZBbHhRXHFPHllNFJLh~X^``VZh`NFRLTHLDLBPATBXGHEPEPbRLRFvLRFJARAhMTD^TJL\\LTB^@RCRYHFJRDNX`RRfXJPBZFZPLDDDB@DFPLF@B@BGAGJGPCNCHDFJDLDBD@JCNINMHAHBJFPDPNFDN@DFD@HKPGFEFCDEFSHIHORWJEN@JGRCHCDCVGDQDCF@JDDBFJFPBBPFNNJ@BB@RDJBFAPGNDJLHBDAVCFG@EAEEG@@FDTBFFDFBJ@`SNEHAFAL@FAJMPGNCFEBCNHL@JBPAHCLBFEBIGK@KCEBK@ADADBRCFC@CBGNOLANNPBLJHBF@DA@CEGQQEE@CBCHCJLFBHCDCDUBEGK@ALEBACMFMHCF@NNZHDHFFDDHC@CGQ@AdAFBBFLDBAAGLCFGFCLDDABCACBERBHEBAEGAEOEAG@KAEASAAEC_EGCCECIAQBE@IBCJILCRLFBJ@PGD@D@HNFBN@HKFCF@LHHADCF[LaJC@CBAHAHCX[B@HBDAHMLI@CAIFGBGBEPKNQFMJK\\S@CGE@QHIBGIKIEIICI@KCIEGGOKEOCCAIMAESDEAEECKKSAAI@ACAEDEFCP@HC@C@CKIBCJCLAJIDFNENAJC@IHGICCBA@@ABCHADG^ATBDA@EAEMGBGHOD@TFDLDBZEFPHJNHNDH@HDFDJAFEB@BBAHDDDADAFKD@TFF@TKHNLHFBDAP@XJPAFED@FHDALERFJLTHHADABED@IEDEEEAEAACAACVK@BCF@BF@BABCAICEECAKLEBGRCFCACGIO@GEGBCGHEDYNCDCBKGQ@AFANBBCDGBGEIJSDDHJXJHD@@@EBGB@FFDBDABKBAXARJNTB@B@LEHMLFPCLFB@NIJJBD@FGJBDD@FCJBF@DAJIHAN@BA@AKIU[@KCC@EXQDC@UEI@ED@DED@NFF@DEXHF@D@JEDEAEAACDA@GMC@@AJQIAECAC@IHUDCDAFJDFFBFBFANGAKBEPMCCEC@ICA@CBELEBQDCB@HDD@HEL@@EHKBGEI@CBCFC@IJ@JDHGFALB@GFEEG@GJ@FCR@D@DE@OBAB@d\\F@FCB@DDH@BB@NFDHBHCFBLG@CFCHBHFJBHDDFHBHFAN@JNFF@DEFCRAJ@EM@A`CNL@JEDAFBDHLHJX@DALKDAVJBF@FGJ@DTLDADKZATPD@@@@CESICECCE@KDGFCL@FDL@@FFHB@BCFSDCDANDBEB@NJDHVIFKDCLEJ@V@FFPBf@DCHADBBJBDDBH@@CCEHOAICCCCC@OPCDE@IGGI@OBKFEFIDCBGFEPCFCDQDCZNFFJDBFTHRNHDFADGDALANMBGPWFBR@DHDBNBNAPKBEEK@CHEDAPFdABCGIDGFCBEFGHCFDD@JGBEDQJBLCHBBADO@GBGJIDEZ@DCLQRWAEEECKACGDC@MIKBMHMJgBCBEGOKFELSJGEKSL]CAEECE@@AAABAACDEACCGCIJSCCCAOHC@@KACDE@KEKB_HMHEH@THDA@ECCBEEKEGBE@KBMFEDAF]BEHAHDDAEMIGAGPMQEWTI@mGoA[DAABGBGJOAYIIAEFSG@@A@KHEDWAGISFC@EFECECEACLKCEBGGKCSBEH@BECIMQAEBKGGFADILO@AGAC@BD@BIPO@KDMBOJGAIGACBED@BEBGDEAYEGO@IGABJ|ADEDEBKP[VGDKMU[DIACM@CE"], "encodeOffsets": [
                    [121252, 26511]
                ] }, "properties": { "cp": [117.635001, 26.265444], "name": "三明", "childNum": 1 } }, { "id": "350500", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@D@ACC@BD"],
                    ["@@DAJBAEEAG@AFDB"],
                    ["@@CB@F@DDBBDH@BAAGEGC@"],
                    ["@@BAAAEBBBD@"],
                    ["@@HBDAACG@A@@D"],
                    ["@@@AABB@"],
                    ["@@DDDACCC@@B"],
                    ["@@@A@B"],
                    ["@@DA@AEAADDB"],
                    ["@@B@@AA@@B"],
                    ["@@F@B@GA@B@@"],
                    ["@@MHIBEF@BJFBDBFCJ@FFFN@DZDJHDR@BBBDFBDBDAPKVIAKCG@MEKAAI@ABADE@IGBECGICGDC@EAIMEA"],
                    ["@@BAAAE@@BFB"],
                    ["@@H@AEBGHAFBD@AEICGFE@BFEHDD"],
                    ["@@B@DCJ@CCGACDC@@DDB"],
                    ["@@ACA@@BDB"],
                    ["@@BA@AC@@BBB"],
                    ["@@GAADLJH@@EDCAAK@"],
                    ["@@BBB@ACAB"],
                    ["@@@BDAAAAB"],
                    ["@@BBBACA@B"],
                    ["@@FB@CC@AB"],
                    ["@@DBDACAC@@B"],
                    ["@@@BBA@AAB"],
                    ["@@BBBAAAAB"],
                    ["@@BB@AAA@B"],
                    ["@@BBFBACCCAB@B"],
                    ["@@DDFB@CAAEAAB"],
                    ["@@DBAAA@"],
                    ["@@@@BAAA@D"],
                    ["@@BDBAACAB"],
                    ["@@BBB@ACAB"],
                    ["@@D@@@AAAB"],
                    ["@@BBBAAAAB"],
                    ["@@BB@AAA@B"],
                    ["@@D@@AA@AB"],
                    ["@@@BB@BCC@@B"],
                    ["@@B@BA@@CB"],
                    ["@@DBBA@CC@AD"],
                    ["@@BA@AGABFD@"],
                    ["@@@AABB@"],
                    ["@@@AA@@BB@"],
                    ["@@HC@AC@CD@B"],
                    ["@@@BBBBC@ECB@D"],
                    ["@@AACAAEEAAIC@AJBDDBBADJBFFBD@@AAABAAC"],
                    ["@@@AA@BB"],
                    ["@@@A@ACB@BD@"],
                    ["@@ABBBF@@ABDD@AGIB"],
                    ["@@B@BGAECCAD@HDF"],
                    ["@@@B@BD@DA@C@@GB"],
                    ["@@@AC@BDBA"],
                    ["@@DB@CAAAD"],
                    ["@@B@BAC@@B"],
                    ["@@EDBBFA@CA@"],
                    ["@@@FAB@DCDBDBBBAF@BA@EBCHA@AGGGBAB"],
                    ["@@@BB@AA"],
                    ["@@A@@BBA"],
                    ["@@ACCAEB@BNF@AAA"],
                    ["@@BAAAE@ABHB"],
                    ["@@AB@BD@DA@CAACD"],
                    ["@@BAAACB@BD@"],
                    ["@@BAAAC@BDB@"],
                    ["@@AB@BBABBBAAAA@"],
                    ["@@ADDAAA"],
                    ["@@@BB@@AA@"],
                    ["@@DBB@AAC@"],
                    ["@@D@AAAB"],
                    ["@@DBB@@AAACB"],
                    ["@@DAA@AB"],
                    ["@@B@BACB"],
                    ["@@BBBACA@B"],
                    ["@@@BAA@BD@@AA@"],
                    ["@@BBBAC@"],
                    ["@@D@AAAB"],
                    ["@@@DF@@CCAAB"],
                    ["@@@DDACA"],
                    ["@@@@D@AAAB"],
                    ["@@BAAB"],
                    ["@@FDD@@AECCB"],
                    ["@@BBD@BAG@"],
                    ["@@BNCHBDD@BEFCB@@DHBH@DCDBBACCFGBKFEDAZAFA@AAI@EBCFABCBOHIDAHDHA@CIMAG@MFMDEH@FC@E@GCEEAC@@BABAACEEABEBAFIGGC@CBCAAABG@AEEQGC@MGUACFBDHDJ@BDADIHSBKDKHKFY@gCWKOICE[sGGGAG@MBWPOBAHGF@FWNAD@DDDN@DB@DEHBDHBd@@BC`I\\CHCDKFABAJDLNJTFBHFBLEDCl]NEdIJCNBPLDJAJMNBBJAF@BFLFBFAFEB@BBB@FCN@FRBRH"],
                    ["@@D@A@A@"],
                    ["@@@DD@@CC@"],
                    ["@@AB@BH@@CAACB"],
                    ["@@BBBAA@A@"],
                    ["@@@DB@@CA@"],
                    ["@@@BBAA@"],
                    ["@@BBBAAAAB"],
                    ["@@AAABDB@A"],
                    ["@@DDJARBBA@CEABCFCNCTFJ@FEDMFAFFD@JMJGNMLEHAD@BDAHCFMNARALDDP@JCDBTPL@FENIVcJEFAJBVNNAD@THZADB@FB@ZBBBFFDBFARFHDDLJBFLJ@JDJFL@VKLKDADBBDIDBH@LDFZHNTBDRHDFPNPHBD@NBBHFCLBFHDDDDJDPAFBHAPCNABCBKAKDIMSCOGOBCFEMA@ADA@ADD@BBEBCFBFE@CFIBDD@DGHG@BHED@BKCEBECGRDFAFI@MGG@AB@DDNDDFFLD@BGFBDH@FCL@BDAD@BFDXDN@D@LHXBFDFHBNNh@JEBC@KQABCJGFADHH@BEBMAAD@HCFEFCH@JIDAD@H@BF@FCBBBPBFBBD@HEHAF@PFBNFHAPDJ@DGD@DBDFP@JJFDNDDFBHJBC@GDCJNCJKHADEFIBALED@FBBXDBHDBD@BAFGFEH@NDD@HGFGFCF@JHLNLHJDBFAFADGDGD@HBHHBRALDPLJCF@FHRFLFRAP@HDNNJAPIPCDA@GEE@IHEPARDLHFLFFN@JGJIPKHFHFLDDJFFNBJCJBFDDFAFKTBHHJJJJBJ@HMHEFBPPDBFCJWHGP@L@JFL^FJJBFAJEDGBQ@ELEBCDaFCD@RLRBHAVODEB@DKIA@GLEBAJYFI@CGEE@KMGCKFC@CK@MCOUW@EFENDLQHETGFIH_@IDGJGDGBQAA@KHURQJEHALFDAB@HINIXEBIVOBKLIJID@HEHKLIDGBC^@HDDCDE@CQKIKBADA\\KFEGOEEBCBCKEAGKEAKioAIBA@CAQYMICEE@CDCAAKKKMIOIEEECGHA@CIG@E@CFEAKPEBCAECCIC@ADAD@LDD@BC@GCOACIAEMMSCGBCFQJKBIB@NAJDDABC@UFOTEBCIQ@EBCL@FAHKVMDABE@IRI@GCCIIAYJEBAM@CCCIGI@ABGDCF@B@HLDJDFFDDADGBIEKEGBGHMAKT@@AFEDBBD^@JABED@BFCH@BDA@HB@F@@DDDJCJ@PFB@LMB@BFDBB@JIFAJ@DAFBNPFBNEH@TFNCCGLOEGAIEEEAMAEEAGHABGJEFGBBDRDABAL@DBHHHDFETMFEKEGMAGDKDA@AACGEAAFE@EE@AABG@QBB@FH@BEFD@A@AEEAEGCCEK@EAAE@ALICMDMFAFGPEAIDECID@AGD@BFB@TB@BHDFHJJN@DAXZFLHAJDRFHFFBLANBBB@BCRBFHJhPAGFAHDLAJDTAFBJBHDAHF@PA@ECGBCD@HJFDRBHHBHALJDBDPADAZBNCLFDCJADKRCJIRCBGEE@EDEDAHGF@bFHADOBCVG@mBKEAKIGCOKYAAE@MBSBIFANBFGRCBCAEMGYIEEICSIG@KDUAEE_GM@qST]FGJGJ@TBJALEHMAYHKVKJAF@JFHBHAPIHAL@HBLHJ\\BFDBP@DBLJRJH@JIJ@BC@CIMIKIE@QEEAMHG@CCAI@@CDCBCGAKAEFG@EKAGBMLUNID@HDDADE@OD@PJFBDCL@JAACBC[UII_C_KCD@BFBABGB\\G@GAIE]cAEBIDGLADADQBCDARBFCJKDCHAJBHDPDP@NGBABMHIBCCEWGaEKCA@DDABA@CCC@ABADCBGAE@KGIASF]FMFGJIB]FWAGCEEEAMKS@AKCCRCDCAACAAGEEIAGLKJIHMDMAIGCCWOUGI@WCGCCCAGBEFATAHCBYDYDKHAJHV@DGDC@CAMSIEUIkGECCU@GJgFEJAHCFIHCHCJ@FBRJXIRBHF@DCJ@BHNJDV@DEBCGSBODKDGJEHANANBBAFBHENBJABAHBH@@CEE@CDCEIDE@CCCGYEEIAGEAE@C@EAAIABEGGGCABKJGCCGDANBBCQOC@@CEABKB@FBBAEGAEA@KCAGCACBADAAAADABCEG@ECAK@EGGACEGEUEM@IDGFIPCJMEKGCGE_DiDIFIHCJ@FLBHDBLBBA@CF@@FBBDABCBmIQ@MGUCGIGQAMGCGBMBIAAG@EBIAKI@COGKOA@CBC@GSCGIEMEYCUMCAIDCDE@KAEBADRRC`AF]NEFALDHHFJBDBBF@FCFytSPMDN_BeAMGYUEC_IcMIEEACCTI@ABALAFKFKHDR@HADA@IMEACACJ@DFFDDFPJBFFDRGXPNB`[RADBH@FWNGHCDBF^jBHINCDMBCBEVCD@FFFTBDCD@DDFTEF@FDFDBDADAB@@JCHCDEACCAEC@QNADHJBFGFDHGBGFKFGNEDGXEDQDIFG@SCGGEAE@CDCBEACHE@GACKEAG@EBCBCJKPAFFFBDAJSHGHKDSLEH@FFNLBBBQVMAIDCCC@CBCFCBIBM@IC@EKAM@KFEASKKGKSE@ABqWOSEBCN@TAFCBG@GMECGBEFGNKLCHBRCFEBKAWHEAAOCCGBYNGACE@EHETCPIDGAECAQDK@KM@CBCPMAAKCYKE@GGCBCHGFGRGJSFWIABELIHCDG@G@ECACAKI@GHIBIJAFBHCFIJIDAABIAAEIGEAE@ICCCBKLMAGEEAKDULG@IEGGHOIIDC@CIECGCAIDKB@DCD@LEFE@AACICECAQIE@IJBF@BCRADC@ICEDIDAHEBOBKFE@OCOIGGEMCCECYGMEGGEAMBIJEBOCINKAC@IJGFGBOAENIHAFBD@FCJ@J@FBBRJFJHHBVCDW@ODGF@JEN@LJJJPJHfNHDFFXL@DCJBJ@FFBR@JDHALIHIF@JDDD@HJNJBPAF@FXDFHBZPFF@JAFYLLPADGN@VEJCDE@KGGKC@QVGFO@SNGHCNA\\BXABMJUHa@ADCJCBIGKTAFDH@LMFK@IBIFCHMDI@EDON@BDDADEDO@ECEBEF@FDZEJPLFFD@F@@FHFBHFBFAPGF@B@DA@EB@LCB@DDJAF@FFJVDLCNGJKJOHDf@HELCD@DLJT@HBTPRFVLLJFRHNJJ\\LFD@FIFBFNDLR@JCPDRON@HPRFJBHHJOZ@JDL@HDFDDLDDFBNFNHHLBFDGJELALFPBN"]
                ], "encodeOffsets": [
                    [
                        [121802, 25820]
                    ],
                    [
                        [121740, 25685]
                    ],
                    [
                        [121899, 25675]
                    ],
                    [
                        [121684, 25454]
                    ],
                    [
                        [121623, 25425]
                    ],
                    [
                        [121623, 25333]
                    ],
                    [
                        [121555, 25259]
                    ],
                    [
                        [121539, 25232]
                    ],
                    [
                        [121508, 25224]
                    ],
                    [
                        [121270, 25180]
                    ],
                    [
                        [121098, 25050]
                    ],
                    [
                        [121068, 24987]
                    ],
                    [
                        [121114, 25038]
                    ],
                    [
                        [121002, 24979]
                    ],
                    [
                        [120996, 24966]
                    ],
                    [
                        [121182, 24971]
                    ],
                    [
                        [121184, 24974]
                    ],
                    [
                        [121622, 25426]
                    ],
                    [
                        [121505, 25152]
                    ],
                    [
                        [121225, 25095]
                    ],
                    [
                        [121247, 25105]
                    ],
                    [
                        [121281, 25132]
                    ],
                    [
                        [121310, 25121]
                    ],
                    [
                        [121294, 25099]
                    ],
                    [
                        [121308, 25078]
                    ],
                    [
                        [121313, 25080]
                    ],
                    [
                        [121224, 25052]
                    ],
                    [
                        [121217, 25047]
                    ],
                    [
                        [121312, 25017]
                    ],
                    [
                        [121314, 25021]
                    ],
                    [
                        [121048, 25070]
                    ],
                    [
                        [121078, 25061]
                    ],
                    [
                        [121087, 25044]
                    ],
                    [
                        [121071, 25039]
                    ],
                    [
                        [121068, 25037]
                    ],
                    [
                        [121054, 25036]
                    ],
                    [
                        [121052, 25033]
                    ],
                    [
                        [121055, 25030]
                    ],
                    [
                        [121034, 25014]
                    ],
                    [
                        [121843, 25475]
                    ],
                    [
                        [121818, 25469]
                    ],
                    [
                        [121820, 25470]
                    ],
                    [
                        [121739, 25478]
                    ],
                    [
                        [121837, 25804]
                    ],
                    [
                        [121861, 25787]
                    ],
                    [
                        [121838, 25757]
                    ],
                    [
                        [121820, 25703]
                    ],
                    [
                        [121800, 25650]
                    ],
                    [
                        [121798, 25647]
                    ],
                    [
                        [121880, 25681]
                    ],
                    [
                        [121897, 25672]
                    ],
                    [
                        [121871, 25658]
                    ],
                    [
                        [121870, 25623]
                    ],
                    [
                        [121876, 25629]
                    ],
                    [
                        [121885, 25631]
                    ],
                    [
                        [121885, 25580]
                    ],
                    [
                        [121891, 25561]
                    ],
                    [
                        [121897, 25564]
                    ],
                    [
                        [121836, 25535]
                    ],
                    [
                        [121815, 25501]
                    ],
                    [
                        [121685, 25431]
                    ],
                    [
                        [121692, 25439]
                    ],
                    [
                        [121642, 25448]
                    ],
                    [
                        [121650, 25451]
                    ],
                    [
                        [121624, 25406]
                    ],
                    [
                        [121606, 25376]
                    ],
                    [
                        [121609, 25377]
                    ],
                    [
                        [121549, 25420]
                    ],
                    [
                        [121535, 25397]
                    ],
                    [
                        [121552, 25256]
                    ],
                    [
                        [121505, 25148]
                    ],
                    [
                        [121483, 25130]
                    ],
                    [
                        [121401, 25127]
                    ],
                    [
                        [121359, 25192]
                    ],
                    [
                        [121301, 25152]
                    ],
                    [
                        [121289, 25160]
                    ],
                    [
                        [121259, 25116]
                    ],
                    [
                        [121278, 25108]
                    ],
                    [
                        [121282, 25109]
                    ],
                    [
                        [121304, 24997]
                    ],
                    [
                        [121255, 25103]
                    ],
                    [
                        [121040, 25021]
                    ],
                    [
                        [121071, 24986]
                    ],
                    [
                        [121034, 24979]
                    ],
                    [
                        [121012, 24979]
                    ],
                    [
                        [121005, 24963]
                    ],
                    [
                        [120979, 24957]
                    ],
                    [
                        [120982, 24961]
                    ],
                    [
                        [120987, 24961]
                    ],
                    [
                        [120544, 26125]
                    ]
                ] }, "properties": { "cp": [118.589421, 24.908853], "name": "泉州", "childNum": 90 } }, { "id": "350600", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@@BBDH@ACGA"],
                    ["@@@DD@DA@CAAC@AD"],
                    ["@@@@B@BAAAAD"],
                    ["@@BBBAAAAB"],
                    ["@@AABB@@"],
                    ["@@ADBBHADGA@EDC@"],
                    ["@@@DBA@AA@"],
                    ["@@@DDABDD@ACCCCB@@"],
                    ["@@ABD@AA"],
                    ["@@CB@DD@DA@ECB"],
                    ["@@A@CDBBDE"],
                    ["@@B@BAA@AB"],
                    ["@@@BDACA@B"],
                    ["@@AFB@BCAA@@"],
                    ["@@PHDAACECC@EAAB@B"],
                    ["@@AACBHFAC@A"],
                    ["@@BAAABAACEBCBC@ADBBFAHB"],
                    ["@@BBB@AEA@@D"],
                    ["@@CDAHFABBF@BCFBFABAB@DAAEBAA@IFCGIAA@@FAB"],
                    ["@@AB@BB@DBHCCGEDAB"],
                    ["@@FCFDBIFC@EGBCFEDC@@HB@"],
                    ["@@D@@AA@AB"],
                    ["@@@DAF@LBDB@BADG@IDAACDA@AACCACDCF"],
                    ["@@BBD@EC@@@B"],
                    ["@@BACA@DB@"],
                    ["@@B@DA@E@AGF@DB@"],
                    ["@@RKNGXaFAH@TDDAJEESBECIBEBA@EAECAE@HMBKBWAMCKGIBKEAICCGCSEKBQJgDENEBAAKDML[DM@ECEKCBI@CCGCMCCICKKMEIGSeCAQBOCMDAACABK@E@ICIIEBCNGNKNGFCFG@GEECQBEHGACAI@KHCP@DALGFGDOBCFAFBDADGPGBEF@H_AABIAGGGBADA@@GUDKLSPMFCRAFCLQZIpDXAVAODC@EGiBQCKEGGEAEBCJEJDTBVAJAPMDEBUFABC@]B@XGJGDICQ@GTSHKBOAMCIEEKEGAcBA@AaAEECGCQAEKCIGMSGEGEcKKAM@EI_a@mIKIG_QWQa[UWOUAEC[FaBSCMQ]EOIIUKSCs@ICWcmeeeIUS}IMeWMABqDYAWIMK[uMBGDGJKDGAMCGgeWe]IOMGK@I@UJULqHMCcSc@CAO[GU@IBEHAFADCFO@QCGMIKAiAICGIEI@aBKPOBUACSUWGM@OBIAWKyWM@G@SFI@OA_G_CM@QBGHGJEXiIßGAÀBJCHIFEAIBICGHK@GDKJMRIEADC@CAG@OIAAERKVKBUAIHIAABEJKLEPEFE@GCQFEDCJ@NBFEF@DBJCFAFDFAJBF@DCJ@XCJILE^EHENSPIJBFCL@BRPEPCVEJAHABEDAHABYHIFIBICEIQ@OFEFEJBBDDDBZACFBFBJFD@BABIBAB@DDFCH]LADDFBD@HAFEDCHBDHBFAJBLHFHBNFFBNCJHNORCF@FBJAFBDBNLLBFIJMFGAKGKHAD@DDN@FKJGHGBCF@DBBLBDBBFBJALDBBFGBMEG@ABCNIHADBHC^BLCJAJBFHLFZBHJJDFJBDBHNHFJLFDR@DBBHHHRHDDDJJJBDAFGJWLGJCBKAGJCJOJ@HU@EAQFANDJF@@@BRAFELDNAVFF@F@FA@C@@B@DDF@DGFIBQEC@GFCnBJLNCFMHADAXYT@FBLRZ@DELL@NATDFBNPJpFTBRIbEPQXEPM^GVC^DJRLN[D@BBHP@JGN`Xv@NA`GTHVXJRBX@TDP@PS\\BXHDdELNFRBT@BMVML@DFJBJDD@PCDUB@LCHMLL~@`AZBLHL^TJ@HHFJA\\BNFJNDJGBGDSCY@IBIFENCTJBDJBLBzIN@NLNbHLXRFHB^BT@NBRHJVLDJF@LHFL@DGB@NKBCDGT@HCJBHZGR@JANUDCJAFBFJPTAPHNBFDDF@BPCFUB@JDFlNTJNLJPNFLGBEMO@EDANHL@LOHAHDBAD@HF\\HLHPCLENCNBFDNNLFTGP@fCDBFCHELMNMHC^ARB^AHBJFFRIBNJJFPHJFNBbBLFhOfkXEF@HJNBd@ZDDNCDB@LDFPDVAHDLHHHBZFFBBLMLED@BFIX@FBDF@N@FICY@EFEFAFDP@FCBCCC@APMFCJ@NCDGJEJAL@NE@KCGBELSJHDADIBCb@VGNIBAAWB[DMHGTMP@HERUD@HLLHF@DCFI@UHMBCKOZKBE@IEEYOGACEEWE@OBIAIM@GCCICE@GJKJGBICQ@EA@EAIDI@CWKEEGCeMIGIOII@KFM@IHEPCX@DCAUGGEIQIAA@E@IDI@EACBEJGFMPBHAHEJID@LBJMPDFAJINAFBHHNFZHFDDDFNHHPJPDF@LEPAFABGJCFCJDD@BCDQ@AAEJIF@RJDBDFDJBBF@FE@KDC@CLAJCDBDHJF@DCDJJGPHHJFH@VKLCFBHFNBLKDADD@JBFHFFJBBAJBBJCJIDEAGBEJIJAHGJB"],
                    ["@@JE@EA@AAA@BHED@B@@"],
                    ["@@DDFBBBB@@EECC@CCABBD"],
                    ["@@BDD@@CAAC@@B"],
                    ["@@BDB@DCEAAB"],
                    ["@@C@@FCFBBCFDB@BAFA@AF@DBBD@LGBEDAACEA@CBCB@@ADCCCE@AA"]
                ], "encodeOffsets": [
                    [
                        [120963, 24945]
                    ],
                    [
                        [120535, 24416]
                    ],
                    [
                        [120559, 24424]
                    ],
                    [
                        [120918, 24768]
                    ],
                    [
                        [120921, 24767]
                    ],
                    [
                        [120968, 24911]
                    ],
                    [
                        [120975, 24931]
                    ],
                    [
                        [120916, 24946]
                    ],
                    [
                        [120923, 24946]
                    ],
                    [
                        [120861, 24766]
                    ],
                    [
                        [120641, 24511]
                    ],
                    [
                        [120694, 24484]
                    ],
                    [
                        [120562, 24394]
                    ],
                    [
                        [120570, 24387]
                    ],
                    [
                        [120585, 24385]
                    ],
                    [
                        [120560, 24355]
                    ],
                    [
                        [120557, 24362]
                    ],
                    [
                        [120543, 24340]
                    ],
                    [
                        [120537, 24344]
                    ],
                    [
                        [120521, 24355]
                    ],
                    [
                        [120509, 24356]
                    ],
                    [
                        [120498, 24353]
                    ],
                    [
                        [120494, 24362]
                    ],
                    [
                        [120517, 24095]
                    ],
                    [
                        [120494, 24116]
                    ],
                    [
                        [120293, 24163]
                    ],
                    [
                        [120743, 25468]
                    ],
                    [
                        [120278, 24145]
                    ],
                    [
                        [120239, 24127]
                    ],
                    [
                        [120243, 24135]
                    ],
                    [
                        [121075, 24739]
                    ],
                    [
                        [120987, 24903]
                    ]
                ] }, "properties": { "cp": [117.661801, 24.510897], "name": "漳州", "childNum": 32 } }, { "id": "350700", "type": "Feature", "geometry": { "type": "Polygon", "coordinates": ["@@NCDCHMHE@GCIEGCMACSCSUECKAGEU_@KBAR@HDPHJ@VGJGDIBMEYEMDOAIDCSIGKCAC@QBKAEAEECQKEKDMGAACICAEGCGMGGKI@@A@]BGJCPODIAEIOES@SFGHKCCBGCYBELEbeBKH@N@LCBAZEhQBGECAC@AdC@CEGJK@C@OJKFCFAKKBKNEDI@GEEAEAMCCCCROBGBCCEFQFGLGBE@OFKBECAE@ICECFKCENEDEJ@BABOJKJSL]DAHAFCJMJKJBF@AIHI@CAEG@UBM@CAAGJKBEAECEGE@EBCHI@EBELKPIHMJKBIEKDCBAAMFCJ@DABCAIGEAMCIBGGGBE@M@KFEHCCEQCGECMIQMIYEKUGAEK@GBAJEFBNDBBFCBKAA@CBAFA@CCCDCLDDGDG@KCC@CBEJBHEJSAIFCFAX@DBJ@NBD@FADGVEJKFDJVAFADCBNJH@PFNAHDBHAFDF@DEFEDCD@FPJHGHEN@XDHAFGLEPSFCD@DFVGBKRKDBLJF@FAHKHAD@HDDFFDJHNFLJPCHCFGFSACO@ICBCHEDC@CCKAIAG@ANIF@HDD@LAFE@GDAHDDBJEFBFDFEB@J@JFD@JENEFGJBJADDFDJAPGZDFEBBJD@RFDBABE@I@EFDHDHAFAAEAMDOFMJIHGBOMSKEM@CC@MDM@EICEA@GAEECAEDG@KBGUBECAIAAA@KFCAGEM]DE@EAGEA@WBKDKACG@C@BCHCBGFAF@D@LSTONHH@BABEDBLIDDFA@AACAELEDILGBCEKEGAIC@ABAJIBCCE@ACCAAD@HCFEBEEABGHBNAD@HGDGAKFI@GHE@C@CE@GG_UGIAKFCEDCCE@K@K@M@GEI@C@AF@LBHADEDIAKIaAGBCJEJ@RGFCBEEEAGGAIICBEHMFCCEAE@GCOCECAOFGACCCEBECUGSDKAAABSBCJIFYACaE@LEDAB@FCDE@C@AD@JADMDKJAJDH@HCDWBGDABEA@BC@ECC@ADAAACG@AFBHA@IIA@CHIFE@AA@GIBEAYBECIIIBGHEGE@CBAFGBCJNRDLOJCFDTGhCHEDKAE@SJQ@IBMDGHE@ECGG@CFC@AAG@AD@LFAIMY@KFAJ@JBFDAM@MT@@KDEACCAIQGCSDGFAHC@I@AAAEAKGGCEQEGEIWAMQMGKIKCICOCKSQCAEGKFEBECIIAKBGFEAKGCCCDG@CWKIGQEWCQMEGBMAKGGKCU@QFQAMBYNGAOMKEIAODIHEH@LKHSAEEMYFIf]J]DEHI@CEAAK@IAGMKHSCCGKOEIBIEIBGDYCEEBEACC@G@UAAAIWDENIFGFGBI@GGiEEI@CACEDE@ECEAOGIKUAI@[CGKG@IES@MC@GDC@ECEDC@KOCKDEKIEIACDCJGVAPGDADM@EKMBKCQEME@CGBG@EEMHQ@GEO@KCIBOCI@ECCDGFILEJAHADAFBLHLAD@FE@EMOFM@IYmHW@IEIGMEGE@C@AJC@GGWIKEECEGCEAEBIAEIGBAJCFEDGAIAEIEEKGAGG@K@AAABQDA@GVGDC@OAUBAJADDBFDDPAFBDHAFFBDC@CEM@GDCJC@KCGL@FDNPDBD@HHFBJALMFCRCTMLCLG@CCEFOSMCEFEFIBCAGFKHGBEBOCOFGAGNeAG@EAAE@MTKRCDGBOAOPAH@HCRA@KAGDIACRAFIHC@ECIFELILHJADcBOECBGF@DFLAFOLMBMACACGQ@EAOXAHMNKBCBCHCBICQMSGAEICEEYMCDCREDODEFAHCDEJEFAL@PHJJHF@DCPOD@DDDDBJGPDF@DG@CAACAICAGBCDe@OAEEU@I@KFCDELUJCGMIA@AFMCCBCDETADA@EG@EK@ECK@EDCH@LDFFDJDFT@D@@C@SOYBCLCBSK@CHI@EAEUICBKLCBW@GIGKACBEFC@IMK_D@BFNI@QBEDCFE@ME@IBMGEGACEGCIAGEGAED@DKHEAGDGAEC@MAAG@CCA@EDE@c[A@AB@PCFC@Q@EDI@@HFHEF@HKAEBGHICI@@JEDAD@DFJAHGL@FK@GFC@GCA@CDARKFAF@DDB@JFDDDONAFBLMHEBEAEACEEICBCDGV@JBDFDJBIR@BD@HNB@DCBBBFCFIFC@E@WGCFE@MEC@CFC@@FFJ@VCDWR@FDD@LV\\LJ@BABM@GBIJCBE@IAEDC@ACHI@EACIIMJA@KEODKEGNKFA@A@MSQIWBABALCBCAEEA@AH@F@@GCWIGICCITFJAHCHADMAEB@BHRALCDMDCZGFDHHAHFP@HJBDEDQDAHKFBLFDDFBJADABE@@ADE@AULBDDBBBBFFFCFJFC@AFCBGBSGIKQEKFCBEGC@EFOBWIO@CBEAKGGMSLE@SEC@ELCBCBCCBGAAA@EFIBECGCG@MCMGGIEOYFCACKSEC@GPAHNHBF@FCBSA]BCHGBAD@BB@DAJDGH@JIDMBMFCEIJKBIDADLJ@D@DGDO@EDCFBFBDJ@BBLTDLFFFBTCBFJNDBPDLFHPFHDJ@LDJJJJFJLAHGJ@RHF@D[TILENMROLAFAHEHBJ@DKJGNCBGAA@W\\GDGBAB@DIDKbE\\CDGBKGE@EDGLM@EAGMC@C@OHI@EAQKKDIJAD@JAFBRDJDFHD`FFDBBBTBF@LBHPFBFFHABGFQAAFBDADCBKCEDEHKDBHABKCAEEAcB@BHR@DGDCCEECGYGMME@GDENDNABKF@BHLAFCVCDGDEAIKGDAD@DFFRRFH@DCBE@GAKIOAMMKBMPAH@DEDQDCACB@BALDF@LHLAJEFKAGDOBIAK@MGADEFMDOHINEBK@EBGBMF_TI@EAECAECS@EH@FFFBH@DEBUACKGCIHMBOAECI@QAAI@MMOEAAEOEICAICE@CDCRUHCDGDQDIHM@IFQXGPGJETCFEDEFOHGLC@CEM@ECOMOCIEGAGBMNMJIDC@CACKEIGCMDODEDCDBLCDE@OKCEA@EX@JADEHET@NDPFHRJDNTX`PDFDJR^HDHGXHDFDLJDFJVNFLNHBDCJLL@RDDHDHAFF@LFDCHDFFRCDG@GBCDGNM@IAQDBJJP@FCHU@]LGCA@IHGLAFFZCPFRADEJAHNF@RBF`NFHDDBJHVBFMRAdCBIAMJCDBNCD@DFNIHCD@FBJJLFBCFEBAJCHEDALB`APEHOFEJBJINCDCBICEMMGIOGECAGNE@MCIFG@GBMHGJAHFPJjEHAHCDIDAB@DHJ@BOLEJEFDDFDBFJEDBFNFJCTLPPHHJFBL@JDPCLILOPM@CAEBG`]DAF@JFLFABCBAF@JHBDDSdKJ@@HTLH@JJBHJFDJ@BCJAFGLDL@PGJBfQRFFFN@JDNA@@AF@HBPCH@HBJFHFBJANFNBN@LCFBJPFDFBNCFDBNFJJJLDBDGV@FDJD@LGV@JPHHBF@FQb@DD\\HfCHONO@GBGDADF^DHCD@DDBDABCFAJFN@HDLJ@LJJHLHBH@DAJGDCBIBICMBECE@GB@HCHGNBFBDD@JJLPXXLNCHDLJT@PHFH`\\BJDDDBFBHDHPHDFJNDD@DE@CDCJABEB@HALRl`FDDJDZVPNBDA@KFEVGN@FCHCDGFCBEGQDMHGHCHNLHNGCMDA@SDKAECG@GBCBANGFOHGFECYBGBCFA@AFCV@FEvQLITGHKHQNID@JHD@HCB@FDHJHBBAFKJGHOTMHIFCHAF@BBJLPJFVJPJFFFL@DDJTJLBDAFEDCJBNFJDLCJAJBFDBNDHFBJHFJDJPLFXFJFZPDFJNFBDADCDIDANJJBTHFBRCHFR@@HJJFJPFH@FFHHHBF@VGDADGFCH@ZHLHFHDPPPDALSHDH@DAF@NLRBD@FCFKFAB@DBDBN@HDNEFEBODCVCL@JBDB@FIXDPAF@JBLFFLHDNFAHEPAH@JHBDALCHIJARJF@FTL@DDDN@LDJFNGTALCLGL@HDB@FEF@LFJHDBFAVFXRLNTMFBVRPHN@HDPCdPFAJCLDVAF@BEDAXFFHBLALFJBHEJ@NFFRF@BADILADBJGLBBBHRFPLDDIP@HBPADCBSBKFUCMFIZKDQLIL@FLHdRB@JAFLFFBDAJBBRBJD@FHJNJD@DCRDJH@DHFNBBFBBJFJBRNJ@FDB@BIGQFEDQHBDA@EEEBAT@BCII@A@EHBDEHCHABAF@DCLFLCHFNKJEHNND@FDF@BGAABBB@FC@CHGD@@DHBLBDHBFHD@RSHAXB`HBB@L@F@DBBTGXFLCTBHCFILKBEEIBMJENFZAD@HHNBNZN@JFF@JIJCJ@LBNPPZHVLPHBHAHFH@HAFCLKDE@KCIAG@KZEBE@O\\[RG\\GHE^@"], "encodeOffsets": [
                    [121647, 28921]
                ] }, "properties": { "cp": [118.178459, 26.635627], "name": "南平", "childNum": 1 } }, { "id": "350800", "type": "Feature", "geometry": { "type": "Polygon", "coordinates": ["@@JG^OPCXExEPGJIDKA_DOHKHEL@\\X\\RNNJFH@^MhIRGJFNPHALCHEHCLBHDJLHlLCTMCGBAL@FAEEACBECEEQ@UHEDICKBYDEHAV@POLBFCNUVANCZSREPGJIDIB_HiPKRH\\PTBJCBEKMIQEOE[JMh[NOVMdHPHNFPCJHN`HLPHDDP\\XZXJPBRALITEHIfHLHRHVDXDPAPGHOD]LgX_RQFM@GAEAKLKBC@CACIE@E@CNU@EKAEGOEACBCRQDBCPB@B@DAPY@EAYSM@CFADALDF@@GH@BA@EBCH@AKE@GDCA@ALODOL@LBHBBBRBxMPODWHKZWTa@SCMAQHAFBFFBDHBFAR[JEJFDFLDDBBD[BRV@JDDNFJXNJFJHLBRDNbRTRh\\FNAJKRIBOAYEKHNZNPBLFDBTLNXLNBN@RD^PXJZFBRANBJBHLJN@^EHeFCBSCCIEAAHODUTMBBBHATBDFGFi@SDMBMCIScAIFG^@|NJHLhTpPJLFDDBF@DEDGDECGF@DDDP@PDHFH@FADMHARHBAAGOKAEHM@MJG@GB@HDLTLJRHH@HHF@FELSDOFEPGPCJ@LADAJOPOBGKIAELUHIHAJ@LBPJ`VHDH@FDPARILSHSHMNGZUV[L[LKdHNAFFF@@A@QGaIMQOIOC@GBKLQLGGG@AAEOCOEIA_HQDFRHDELED@JDBAAMEOBKFKHIECKAGGEMAMCEKCEGAICK@EBGNUGIAGEIOQ@GPMCQDO@IKQMCAEJE@EEC[KIIGMEQKIUKQESOGAS@KI@CDCFK@GCePGLIHIDMCKIUEEE@IBCCA@KDA@@FCBA@E@OHEBEAAGGE@EE@C@EEOKS@AC@EJWAEC@KFKNAAEEAYGGKGGCUBOCCE@KCAMDCC@YAcIM@GFElWPeEgAKAaEMGIEOIIAMJEQIEGA]BQA]BGDMNKNGFEDCAeDO@SHKEMMECMAMDKFODKG[GGEC@ABGCGBKPK@MGCB@FNPAFKHMEIOMKSIkMCE@IVADEAOE@CCAEGMBOOSEIEAIBCDMVIBQ@YHAGDI@GHSDCLA@MHA@CEKKGE@CIUKGIAQ@MASA]EGWQGKMaMKM@yJKAIAACSIMDEFAJ@JDZE\\IHMCEIAMB[EIGGI@]SGKAKBY@_K}NKDG@KVADC@OCCAIEI@CNKNU@AASEQKMcFGCAWT[@OCO@SAWIQKMIISG_HMBu@_WHM@IGOAAC@M\\QKCID]HUN]FORWFOJaAQESIoMOEASCMBK@FK@CCEKXURCLE@EAKGCHCF@TIBABKVCFOHABO^@DHFCLBBTCBBLHDF@DMPIROPOT[SKEA@@D@BHH@B_NIHORINGN@FBLCBM@[XCH@JBDHFNHIXEHBFjjDHFHBHPJDDDDCRBJFDFBFFJDBBDREJCLQZIBIASDGAQQMKQS@@MHGJAFCBM@I@KEKDGAI@CCAEAEECUHICQBQ@UEEAAEC@QAEEG@CGAGA@CBKBEHGDEAE@SNGBGIAKIMSGIEAE@EAEQCAEIACAACSAKEOGG@KLIDIFGLHHAHFL@JBF@DHFBHCFGBAJIJCFCHAV@FDH@LCFSVEPGFE@GEQD[KI@IBGFCLANCHEDI@AHABQDEDAFDFHBIJ@BFHF@CH@DOPIFCFCJCNADC@KGE@I@EFBJMLAFFRAHHHFDJBFDJ@NHXJFF@DILI@ALMAEBEFAHDNIHDDHB@DAB_@ECC@@ABGACI@GFGCOSGEBE@GCM@MCKGGI@CACGC@@JIGSIGIOGIKGAYEY@MB[MK@IDOJ@DBHJNNNJD@H@DGDKBMCECCAMHABAXADADIDELCDODIPGXGBMEGKWUGEQSGAOAIF_DIDGCIBC@CCEDG@CABIGKA@GFBFALCFA@WBAEEAEPCDI@KDCFEHDHABABGEE@@BDBBDCBAPCFQNMPGFGBA@SQA@KAMHG@C@CNCDAH@FC@A@ICA@CFAEEAGD@BMFCCEBCCAFCBI@I@GBI@UHG@EAABAFADQPABGAKRCJGDG@EBEL@RDHVJDADGJCFODAF@JFZKH@FBBBAHMTedaFCDBHIFAFAF@NAHLJRCDFBJJBBFBDDBDAFHPDLGDDFJH@DFADKJAD@HO@@FFDAHHFEFEJIHMFKBW@EBAFBPFHOLCFAD@NDDLAJFDHAJCNEBCDALCDC@OEGBEHKAADAHAHBBPD@DCDGFCHJD@DAXBFC^PLHNFAHCDGDAPFBAHDVZRDPEBBHDLDDBDLHJFPJH@FJJBNEPALFLDBF@JCLIJ@DBFD@NBBDBF@HEDIB@HHJHLNDNHP@DEDIB@DHDBD@LEHCFQD@@BHLDDNOZ@HFJZ\\AFIX@HBBDDT@JHDD@HAD@HDLADIJ@HIRBPFLFJABMGGFAFDTCBAFJHFHFTHBVDLHCHBD@DAPBTDLBBDBPCLBDBBHHHDJ@DKLBJGJ@^CJIFGBED@FNTGFCNDBP@BDDLFFFBDAFGD@BDBTKHAHIJ@DJH@DCHBHH@@B@BQLHN@LFBBABIFBATBFDBFGHBLKD@D@HHNAF@PHDB@HAN@RJNFBDDCLBFHLJJBFDHP@FBBBJCDFH@JFJBH@B@BCEIBI@KHCLFBbDJFL@DEDCJCDGBAFCFCDGBCBDPCHUNMBCD@FEFGECD@RADAF@ZDFAJXNBDBFBBRJRDNAHN@FHNZNPATDJHVFD@DAJMFALDLBNCFBDBFPHFFBZ@LHF@H@NFDBDNFHJHHBHFHTBHDDT@LHLBbAFBDDBBEVEPIR@FBD@HHJJ@FBAJLLLZBB`D"], "encodeOffsets": [
                    [119194, 26658]
                ] }, "properties": { "cp": [117.02978, 25.091603], "name": "龙岩", "childNum": 1 } }, { "id": "350900", "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [
                    ["@@KBWJOLYXEJAFDRFHHHXLLDRARGPKJKFUDI\\KDEBEACEAUDC@]SIA"],
                    ["@@MFEFM^@RJXDHPLHDH@PKTGjEZHTJ\\HRCLGBOIOosKuC"],
                    ["@@I@IHIHEJAJPLLFFHFNTTHJFDHBJ@LGFE@I@MI_CAKBOEAIBGSMIC"],
                    ["@@E@IH@JBBJDBDBFDH@BEFBDNDFDJBRGDLDDFBF@DCDC@CASEICMGECAEDO@AAAEEES@"],
                    ["@@DMA@K@IBIHABNHFEL@"],
                    ["@@BBH@DDD@AGKCA@AF"],
                    ["@@NLFBPBDBDAACEIE@EAAAIBIEAB@D"],
                    ["@@BFF@DBB@BCHB@GDA@AKAE@BCH@@ACCC@@ADA@CEACAID@FFBABBDABCB@BFDAB"],
                    ["@@CFHB@FBABBDCD@D@BADBFEE@EEB@BBDACC@AIA@ACC@ACAC@ABBFBB@DCD@B"],
                    ["@@ADD@DEE@@B"],
                    ["@@ADDAAA"],
                    ["@@@FBBBGDEAAA@ABAF"],
                    ["@@JDBBD@B@BEAAC@M@@B"],
                    ["@@BBDCD@DDDACGE@EAA@AFBD"],
                    ["@@BBD@FEFFJAJABCCAGBKEC@AAA@AB@FCBAD"],
                    ["@@JBABBBN@RC@CACF@DFB@BCAA@AD@BCEACDEA@AC@@CCABECAIBEAADEAADG@EAOHEFBDDBHAPF"],
                    ["@@H@@AB@HBBACCEAKFBB"],
                    ["@@D@DEJADHDALBBBD@@CGAKIEC@AD@D@JBD@@E@AE@AIA@ADCACBEAAAE@AEG@@D@HJHGDBFAHBD"],
                    ["@@ILDHRJL@@AECBC@CDACEKGG@"],
                    ["@@FBJ@NBD@EEI@CCK@EA@DDD"],
                    ["@@HBHCD@DB@FNDDAACFEAAGCEAIBCAKAGF@BDD"],
                    ["@@C@CB@DG@IDEH@DF@BDB@BCD@BAFDDABEH@BCAEEE"],
                    ["@@JBDHHDB@DCB@BCH@@CFABA@EAAM@CCG@KGCA@F@FEAEBBFABBDDDB@@C@@"],
                    ["@@@DJJJABCDABEBAHDFCEC@ECAIDAF@@ICCDEAAF"],
                    ["@@HHJ@@CF@ACAAKCCAA@AB@B@D"],
                    ["@@DDL@@AHB@@CEKAGD"],
                    ["@@HBFD@HD@B@BGDCDCCCBAAAGBGAE@GB@DB@BD"],
                    ["@@BDFADBDFCLJBFFBA@EBCHEDGIACGWBED"],
                    ["@@AB@DPBHHD@BEAC@CEEEGIAAF@DAD"],
                    ["@@CPBBF@DABAEIFBFA@C@CECAGGGI@ABBDBBHP"],
                    ["@@FDD@DIQBDD"],
                    ["@@H@@CACC@BDC@@D"],
                    ["@@BBJ@HBF@FAT@JBFDBBTCDC@AKIE@@ABCACCC@GEE@ALGFI@AAAKBEBEJA@ECG@ABBFCNQACFKDAFGB@BFDADBD"],
                    ["@@IFIHBDADN@FAHEF@DCD@BA@A@AHDD@@EF@CEEACEEAEAC@AD@@DD@DGDE@"],
                    ["@@A@AFDLDFJDNC@CBCAC[K"],
                    ["@@CH@FBBLDHDLBL@dLDADERCNIBCACIGEGC@GDOBAEGEYEEEC@AFEBG@CDCDCJ"],
                    ["@@FJHBJKEECAEBEAAD@D"],
                    ["@@BBFBFARHB@EE@ADACEBCAEEBE@@BG@AFCBAD"],
                    ["@@A@BCCCIDGEJOJ@HGH@DCBKACDEHEAIBCFAP@HCDGJCAEDCDCJABM@INFFC@EIGKMPEDMDEH@HEN@D@DGCG@CBEHEH@JAHGAEKGILCBA@AEBU@ACE@CDAB@F@JCTCDDDLD@^KHKLCDB@HDBFA@ABANDLCDBFNKBIJPRFDFADEHEDCHDJCN@BAAAMG@CDANBBAAGDCFD@HBHHABCB@BF@FB@JEHBF@BHDDHBD@D@H@LIDBADDBNAHBHAPCBDCLG@ADDDCF@BJHABI@ABDDL@DBDF@DFHRJDDFH@DABOEADBHHDVDRFP@BB@JLFVEFABG@ONBFKPO@GAEDCP@TGN@BLDFL@JVDDHBFFDLLBNNJ@FDAVDDRHVDHAFABEFAJBFHBJCJEFCHBFFFPFdDF@BBFABCJ@LEBBF@VNH@LBD@LKFCHADDFABDJBDHPDRLDJD@XMDE@G@OGECE@EDELKNWDAH@HDJJJDFANGJ@DFBCHABBAHDJ@H@BFDHCBC@CGEBANEH@RHLIHKDGEMGI@ABECCACDGRGBE@AEK@ELIBERKJADAHKJUJI\\UDYJOLIFCZUAGCEICGDEHI@QKGIBEVMHG@AGOIG@CDEKEDAJ@BA@CGEJIBGEE@ARADGNGBCCEDIRIDE@GBAHBFAbeuoQMoUAI@MACOKY@kH_D]ACDCJCBE@[KCAIBSLC@GCAEBKLKBEAIEOHOPUBG@CGC@I@CAAEDAXAJCDGBEDUAKCIFIBGCICCaCGIKG@EFMIGCKAOCKBAFBBAAK@OEEMIISC@MBDJC@O@KFeECBMJEB_@QEIBGHC@MMECEBGJCBK@CCACACBQHS@I@EGIMIMKMAQ@QAGCIIEAIA]DKAIECKBOJ]BEFEJApARAhHFECCKEEGFWJOHAD@LFNBB@FEHAPFD@BICG]QOaOQ@CPQL@LCnPDBJ@DE@EACIGAC@CTBDAFC@QGMCASMkGKCMKIICEBCDCDQHMCMBEHCNDHBB@@CIGAEBG@@JBJDJAFC@A@ECEIGcKKGA]FIDCDING@goYSCIAQBSFMDUESKIQGG@AFCAADKFCHA@CAAEAACICAOEEYAUIEGIECCBEEIKQSGQ@KAYDQDQBGDELGDAFBBDPAFBFLP@HAPBDPLDF@JEJ@BFNLLFD`NPJJLRDTPD@D@VED@LDNALBF@FGBIBCDADBBDATDDLDJR@HEFAJFHT@DDCN@HBDHHFFAFKJAFAFBHNJNNDBFLJTNH^DJDBLAHBBRJFHBBP@ddFFBJAJGLCBGBgGo@QAUCYKI@GBAB@FDH@FEDGAGGG@IDM@UIECGIAENONY@OEGGUc[IMGQKIDOFGBIEE@EBEHADC@EGEKAIGKCGIUGG@IBEBEHAH@J@DLV@BAFUPeRMA[GECmNG@MW@Q@SFaT}|CHI^G@BGBI@EBIFEJE@GGYEIOCMFEDCAECCCBGNM@EMQK@IgGOQIQGUOKDA@OMBIrqLGLENBLJLBHHrPHFFHFBR@JCLITA^DVDT@JEFEPQDETIP@fOHMBEEGACJOJGDMAEINAHSLCHIDSNIB[CKBCA@CHECASOICWLEBG@UFMII@EACCOo@CMEEFE@CG@CAGEAI@OFGACBMGQEE@CB@BBFABMBA@@DEB@FCDEDMFE@GEE@GHQAMLEBICCBCDFD@FAD]LM@CDOVLJ@BKRKFAJIDMR@JBDILCDWA@FKDSLEA@CEAE@CDGBS@MEUCMAEBMPKBCA@CAAG@AABAZIBGICG@CBIBIDMBOAAE@MIOEEUCCBCDG@CB@KCDG@AA@C@AFCBEEEIBIE@EEGGCCBA@EAAEED@DGCA@@DDFF@BJABEB@HUBE@EAUWGQGCCIDADIHUJGBCEIYII]GEBQX@TGHMZCFMFCAEIGCIMCCMEG@C@IIAEC@CBGAEDE@GAAGAAGHEBQ@CA@CAAO@AD@DEHBJEDADCFIBBBBDEHBFCD@HC@CA@KAAIACBCDA@OCK@QHCDBFFHLHJBBD@FEFEFMJCFCBC@MMCAI@_DGCBMACKFEAAMACGA@EBEF@@CIIACDI@AGEKFC@ECCC@CPO@CEEACFG@AECACCAE@IHEBS@KAQGKEEICUOMCKBGFEPBFEBKG[GECAM@CDSVE@UAKBaIGCCC[G@C@ICCOGAKIMaSUGCNBBGDAJOCFEMGCJ@L@FD@BDCFWT@DPL@^CHMFOFIBABFLEJEFS@GBCDC@EAUBCG@G@AFADCAKJABGAGQGGIC@GEAE@QCIDQAEGMHE^OTGFCIOFKIA@ICEBEFCRAHEFECGJGHKDCFAF@RKFGAICICUGC[QEA[FMF@FABEB{BQ[GGGCEEMICCAYLCBA@CACCAE@CDABC@@CC@G@DICCUIGICFDPAPAFGHELBHADEJEFDFTNEPDF@DKHKDSNQDEDKNIBEAGGC@CAMOECK@DH@LIDCD@HFN@DCDEABECGEAOBCCAECCIBABBV@PCDUH@HCB@HAJBB@B@LHHHBFLJFBFBJCHEFID@DHFBFAJBFJNRJXJHHD@BID@F@JLJT@JGXZn@JENNP@FEFC@KBKGEACBGBIBKFEJCHDD@FDJAPDJ@LFP@HGRFN@FAHDHF@FNDRALLN@FCNCBOHUBIHCDBDFJLJCFDLLPD@FCFDD@HCD@@NFT@JLHDH@\\BJLVHJBPDF@FCFDFDBJ@FFHj@HAJEHEHMJCFJXBBVBH@D@BDAFFFZDHCJAJFJAPFHLDDGTNLBH@JBLFB@DGJCFI^e^EJHPLPTBLG@KFGJGPCJBLFPNHBZMNARBREV@LDHHBLANFHRNXDRFJHXL@DCHDDHDBLEFAHBLJJFDFALEFHDBTRDLDPDJJLHLRNBNJXHFRFDFHHBLBFBBJ@D@BGHETCHDJRDBBDCF@LS@@NBNECIAI@EB@LNZBJKEC@@BBH@BED@DHHFDF@HGNCJAR@TIF@LBFCDGHgCSDEPICKMQDIHABEDAF@FHHGJAJJFDZAFBJA@HBBF@JEDGB@JJB@AGBEH@BDBBBCD@FDD@@AFBBAHCXADC@GCGBILINCBC@IBCD@F@DC@EBAFC@KbFBDEZIJADATBBLBTCVHFDFADDBDEHBPFDPDHDF@FBDDNEFGDAJJHBBHFFAFEDQHI@IFADBHJbBLCJCFGBKAE@@B@DFJ@H@N@L@LDFCDDFLEJBVHH`@HDFD@F@HGJ@LEHBHC@GBCAMHGBAFFFADE@GBCDBBDF@DDJABIBAD@BJFHFJAFKHCJKFBFBD@BEBCCKJCAAFABG@MGSPKTC@E@EBAHGDADD@H@BDCLAL@XFBBH@FCFN^HFDBLEB@BBBJFDVAAH@LCHBFFDBF@HFBJD@FCN@NDDN@LFNR@BAPGHIJCDCPAPDNLBBBDJLPBF@DNdNH~ZLHNDLHFHD@AHHBAHEB@F@JCBFHJHTTVPLFfJl@LEJK@IDMHKJIPFLDJHTTRZDL@RLTDNE^N\\XRBD@BENBHCHFFAFD\\@JN@FHFAFCFAFDBDBJBDVCFBDH@FELBFH@DGHABI@A@ABAHBDAD@HFHCBBLFDFB@DAFEDALALDDJB@PFD@NAFBFCBC\\CDCF@HE@EIQBEPQ@ACIECCG@EAAGDAAGEC@ECAKDGFE@ECE@GDGBWFCLBJEH@vGDGIM@OC@C@ACEKEGCIHCDCACD@JFPBFADB@FBBDEHACCBCVQACDKHAFC@EIGAOBALC@GBGGC@EBCFB@A@CEADGEIHMMIDGCC@KIEEA"]
                ], "encodeOffsets": [
                    [
                        [123250, 27563]
                    ],
                    [
                        [122541, 27268]
                    ],
                    [
                        [123020, 27189]
                    ],
                    [
                        [122916, 27125]
                    ],
                    [
                        [121678, 27068]
                    ],
                    [
                        [123398, 27612]
                    ],
                    [
                        [123294, 27747]
                    ],
                    [
                        [123611, 27636]
                    ],
                    [
                        [123592, 27651]
                    ],
                    [
                        [123587, 27574]
                    ],
                    [
                        [123587, 27576]
                    ],
                    [
                        [123438, 27501]
                    ],
                    [
                        [123358, 27630]
                    ],
                    [
                        [123380, 27622]
                    ],
                    [
                        [123263, 27607]
                    ],
                    [
                        [123185, 27583]
                    ],
                    [
                        [123137, 27586]
                    ],
                    [
                        [123136, 27581]
                    ],
                    [
                        [123105, 27518]
                    ],
                    [
                        [123002, 27474]
                    ],
                    [
                        [123025, 27443]
                    ],
                    [
                        [123021, 27325]
                    ],
                    [
                        [123237, 27343]
                    ],
                    [
                        [123240, 27281]
                    ],
                    [
                        [123209, 27290]
                    ],
                    [
                        [122984, 27247]
                    ],
                    [
                        [123034, 27193]
                    ],
                    [
                        [123016, 27168]
                    ],
                    [
                        [123017, 27126]
                    ],
                    [
                        [122884, 27182]
                    ],
                    [
                        [122850, 27191]
                    ],
                    [
                        [122865, 27137]
                    ],
                    [
                        [122785, 27331]
                    ],
                    [
                        [122683, 27314]
                    ],
                    [
                        [122653, 27317]
                    ],
                    [
                        [122636, 27252]
                    ],
                    [
                        [122672, 27239]
                    ],
                    [
                        [122677, 27206]
                    ],
                    [
                        [122569, 28102]
                    ]
                ] }, "properties": { "cp": [119.527082, 26.65924], "name": "宁德", "childNum": 39 } }], "UTF8Encoding": true });
}));