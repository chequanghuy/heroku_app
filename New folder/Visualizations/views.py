# -*- coding: utf-8 -*-
from django.shortcuts import render

from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
import math
import numpy
import statistics
from scipy import stats
PATH=r'C:\Users\quang\Máy tính\Visualization-master (7)\Visualization-master\Visualizations'
# import math
def homei(request):
	return render(request, 'base.html')


def get_dataa(request):
    excel_data_df  = pd.read_excel(PATH+'\dataCQ.xlsx',index=False)# đọc sheet chính quy 2017-2018
    
    df=excel_data_df.drop(['Nhóm ngành'], axis=1)	#bỏ đi cột nhóm ngành
    cln=[]
    #do merge các ô trong excel gây nên một số ô có ý nghĩa bị trống nên cần đưa ý nghĩa của chúng vào các ô bị trống
    for i in range(0,8):
        if type(list(df[df.columns[i]])[0]) is str:
            if i is 3 or i is 6:          
                cln.append(str(df.columns[i-1])+"-"+list(df[df.columns[i]])[0])
                
            elif i is 4 or i is 7:
                cln.append(str(df.columns[i-2])+"-"+list(df[df.columns[i]])[0])
                
            else:
                cln.append(df.columns[i]+"-"+list(df[df.columns[i]])[0])
                
        else:
            cln.append(df.columns[i])
    df.columns=cln
    df=df.iloc[1:-1]
    names=[]
    write=False
    #bắt đầu lấy các cột từ cột ngành
    for ind,name in enumerate(df.columns):
        if write is True:
            names.append(name)
        if name == "Ngành":
            write=True

    datas = []
    #đưa các cột dữ liệu cần quan tâm vào list datas
    for ind,column_name in enumerate(names):
        data=[]
        for i,r in enumerate(df[column_name]):
            if not math.isnan(float(r)):
                data.append(float(r))
            if math.isnan(float(r)):
                break
        datas.append(data)
    Nganh=[]
    for i,r in enumerate(df['Ngành']):
        Nganh.append(str(r))
    #đọc sheet thường xuyên 2017-2018
    df  = pd.read_excel(PATH+'\dataTX.xlsx',sheet_name='TX2017-Dot1',index=False)
    #đọc dữ liệu thường xuyên 2017-đợt 1
    df1=df.iloc[0:10] 
    df1.columns=df1.iloc[0]
    df1=df1.iloc[1:]

    df1['Nghành-Hệ đào tạo-Hình thức đào tạo']=df1['Ngành']+"-"+df1['Hệ đào tạo']+"-"+df1['Hình thức đào tạo']
    #đọc dữ liệu thường xuyên 2017-đợt 2
    df2=pd.read_excel(PATH+'\dataTX.xlsx',sheet_name='TX2017-Dot2',index=False)
    cln=[]
    for i in range(0,7):
        if type(list(df2[df2.columns[i]])[0]) is str:
            if "Unnamed" in df2.columns[i]:          
                cln.append(str(df2.columns[i-1])+"-"+list(df2[df2.columns[i]])[0])
            else:
                cln.append(df2.columns[i]+"-"+list(df2[df2.columns[i]])[0])
        else:
            cln.append(df2.columns[i])
    df2.columns=cln
    df2=df2.iloc[1:-1]
    trungtuyen_tx_2017_d2=[]
    for ind,d in enumerate(df2['Xét-SL trúng tuyển']):
        if not math.isnan(float(d)):
            trungtuyen_tx_2017_d2.append(int(d)+int(list(df2['Thi tuyển-SL trúng tuyển'])[ind]))
        if math.isnan(float(d)):
            trungtuyen_tx_2017_d2.append(int(list(df2['Thi tuyển-SL trúng tuyển'])[ind]))
    #đọc dữ liệu thường xuyên 2018-đợt 1
    df3=pd.read_excel(PATH+'\dataTX.xlsx',sheet_name='TX2018-Dot1',index=False)
    df3=df3.iloc[:-1]
    df3['Nghành-Hệ đào tạo-Hình thức đào tạo']=df3['Ngành']+"-"+df3['Hệ đào tạo']+"-"+df3['Hình thức đào tạo']
    #đọc dữ liệu thường xuyên 2018-đợt 2
    df4=pd.read_excel(PATH+'\dataTX.xlsx',sheet_name='TX2018-Dot2',index=False)
    df4=df4.iloc[0:-1] 
    df4['Nghành-Hệ đào tạo-Hình thức đào tạo']=df4['Ngành']+"-"+df4['Hệ đào tạo']+"-"+df4['Hình thức đào tạo']
    #sau khi đọc được hết dữ liệu của chính quy và thường xuyên ta đưa vào data để xử lý đưa dữ liệu lên web
    df2018_CQ  = pd.read_excel(PATH+'\data2018.xlsx',sheet_name='CQ',index=False)
    df2018_CQ=df2018_CQ.iloc[0:-1] 
    df2018_TX  = pd.read_excel(PATH+'\data2018.xlsx',sheet_name='TX',index=False)
    df2018_TX=df2018_TX.iloc[0:-1] 
    df2018_TX['Nghành-Hệ đào tạo-Hình thức đào tạo']=df2018_TX['Ngành']+"-"+df2018_TX['Hệ đào tạo']+"-"+df2018_TX['Hình thức đào tạo']
    df2018_CH  = pd.read_excel(PATH+'\data2018.xlsx',sheet_name='CH',index=False)
    df2018_CH=df2018_CH.iloc[0:-1] 
    df2018_TINH  = pd.read_excel(PATH+'\data2018.xlsx',sheet_name='TINH',index=False)



    pearson_chitieu_diem_2017=float(stats.pearsonr(datas[0],datas[2])[0])
    pearson_trungtuyen_diem_2017=float(stats.pearsonr(datas[1],datas[2])[0])
    spearman_chitieu_diem_2017=float(stats.spearmanr(datas[0],datas[2])[0])
    spearman_trungtuyen_diem_2017=float(stats.spearmanr(datas[1],datas[2])[0])
    pearson_chitieu_diem_2018=float(stats.pearsonr(datas[3],datas[5])[0])
    pearson_trungtuyen_diem_2018=float(stats.pearsonr(datas[4],datas[5])[0])
    spearman_chitieu_diem_2018=float(stats.spearmanr(datas[3],datas[5])[0])
    spearman_trungtuyen_diem_2018=float(stats.spearmanr(datas[4],datas[5])[0])

    spearman_trungtuyen_diem_2017_d1=0
    pearson_trungtuyen_diem_2017_d1=0
    spearman_trungtuyen_diem_2017_d2=float(stats.spearmanr(list(df2['Thi tuyển-Điểm trúng tuyển']),list(df2['Thi tuyển-SL trúng tuyển']))[0])
    pearson_trungtuyen_diem_2017_d2=float(stats.pearsonr(list(df2['Thi tuyển-Điểm trúng tuyển']),list(df2['Thi tuyển-SL trúng tuyển']))[0])

    spearman_duthi_trungtuyen_2018_ch=float(stats.spearmanr(list(df2018_CH['Dự thi']),list(df2018_CH['Trúng tuyển']))[0])
    pearson_duthi_trungtuyen_2018_ch=float(stats.pearsonr(list(df2018_CH['Dự thi']),list(df2018_CH['Trúng tuyển']))[0])

    spearman_dangky_trungtuyen_2018_tinh=float(stats.spearmanr(list(df2018_TINH['Số lượng thí sinh ĐK']),list(df2018_TINH['Nhập học']))[0])
    pearson_dangky_trungtuyen_2018_tinh=float(stats.pearsonr(list(df2018_TINH['Số lượng thí sinh ĐK']),list(df2018_TINH['Nhập học']))[0])

    spearman_chitieu_nhaphoc_2018_cq=float(stats.spearmanr(list(df2018_CQ['Chỉ tiêu']),list(df2018_CQ['Nhập học']))[0])
    pearson_chitieu_nhaphoc_2018_cq=float(stats.pearsonr(list(df2018_CQ['Chỉ tiêu']),list(df2018_CQ['Nhập học']))[0])






    data = {
        'sta_chitieu_2017': [int(min(datas[0])), int(max(datas[0])), int(sum(datas[0])), int(len(datas[0])),round(statistics.variance(datas[0]),2),round(statistics.stdev(datas[0]),2),round(statistics.mean(datas[0]),2)],
        'sta_chitieu_2018': [int(min(datas[3])), int(max(datas[3])), int(sum(datas[3])), int(len(datas[3])),round(statistics.variance(datas[3]),2),round(statistics.stdev(datas[3]),2),round(statistics.mean(datas[3]),2)],
        'sta': ['Min', 'Max', 'Sum', 'Count', 'Var', 'Std','Mean'],
        'nganh_2017': Nganh[0:len(datas[0])],
        'chitieu_2017': datas[0],
        'nganh_2018': Nganh[0:len(datas[3])],
        'chitieu_2018': datas[3],
        'sta_trungtuyen_2017': [int(min(datas[1])), int(max(datas[1])), int(sum(datas[1])), int(len(datas[1])),round(statistics.variance(datas[1]),2),round(statistics.stdev(datas[1]),2),round(statistics.mean(datas[1]),2)],
        'sta_trungtuyen_2018': [int(min(datas[4])), int(max(datas[4])), int(sum(datas[4])), int(len(datas[4])),round(statistics.variance(datas[4]),2),round(statistics.stdev(datas[4]),2),round(statistics.mean(datas[4]),2)],
        'trungtuyen_2017': datas[1],
        'trungtuyen_2018': datas[4],
        'sta_diem_2017': [(min(datas[2])), (max(datas[2])), (sum(datas[2])), int(len(datas[2])),round(statistics.variance(datas[2]),2),round(statistics.stdev(datas[2]),2),round(statistics.mean(datas[2]),2)],
        'sta_diem_2018': [(min(datas[5])), (max(datas[5])), (sum(datas[5])), int(len(datas[5])),round(statistics.variance(datas[5]),2),round(statistics.stdev(datas[5]),2),round(statistics.mean(datas[5]),2)],
        'diem_2017': datas[2],
        'diem_2018': datas[5],

        'nghanh_tx_2017_d1': list(df1['Nghành-Hệ đào tạo-Hình thức đào tạo']),
        'trungtuyen_tx_2017_d1': list(df1['SL trúng tuyển']),
        'sta_trungtuyen_2017_d1': [int(min(df1['SL trúng tuyển'])), int(max(df1['SL trúng tuyển'])), int(sum(df1['SL trúng tuyển'])), int(len(df1['SL trúng tuyển'])),round(statistics.variance(df1['SL trúng tuyển']),2),round(statistics.stdev(df1['SL trúng tuyển']),2),round(statistics.mean(df1['SL trúng tuyển']),2)],
        'sta_diem_2017_d1': [(min(df1['Điểm trúng Tuyển'])), (max(df1['Điểm trúng Tuyển'])), (sum(df1['Điểm trúng Tuyển'])), int(len(df1['Điểm trúng Tuyển'])),round(statistics.variance(df1['Điểm trúng Tuyển']),2),round(statistics.stdev(df1['Điểm trúng Tuyển']),2),round(statistics.mean(df1['Điểm trúng Tuyển']),2)],
        'trungtuyen_tx_2017_d2': trungtuyen_tx_2017_d2,
        'nghanh_tx_2017_d2': list(df2['Ngành']+"-"+df2['Hệ đào tạo']+"-"+df2['Hình thức đào tạo']),
        'sta_trungtuyen_2017_d2': [int(min(trungtuyen_tx_2017_d2)), int(max(trungtuyen_tx_2017_d2)), int(sum(trungtuyen_tx_2017_d2)), int(len(trungtuyen_tx_2017_d2)),round(statistics.variance(trungtuyen_tx_2017_d2),2),round(statistics.stdev(trungtuyen_tx_2017_d2),2),round(statistics.mean(trungtuyen_tx_2017_d2),2)],
        'sta_diem_2017_d2': [(min(df2['Thi tuyển-Điểm trúng tuyển'])), (max(df2['Thi tuyển-Điểm trúng tuyển'])), (sum(df2['Thi tuyển-Điểm trúng tuyển'])), int(len(df2['Thi tuyển-Điểm trúng tuyển'])),round(statistics.variance(df2['Thi tuyển-Điểm trúng tuyển']),2),round(statistics.stdev(df2['Thi tuyển-Điểm trúng tuyển']),2),round(statistics.mean(df2['Thi tuyển-Điểm trúng tuyển']),2)],
        'nghanh_tx_2018_d1': list(df3['Nghành-Hệ đào tạo-Hình thức đào tạo']),
        'nghanh_tx_2018_d2': list(df4['Nghành-Hệ đào tạo-Hình thức đào tạo']),
        'trungtuyen_tx_2018_d1': list(df3['SL trúng tuyển']),
        'trungtuyen_tx_2018_d2': list(df4['SL trúng tuyển']),
        'sta_trungtuyen_2018_d1': [int(min(df3['SL trúng tuyển'])), int(max(df3['SL trúng tuyển'])), int(sum(df3['SL trúng tuyển'])), int(len(df3['SL trúng tuyển'])),round(statistics.variance(df3['SL trúng tuyển']),2),round(statistics.stdev(df3['SL trúng tuyển']),2),round(statistics.mean(df3['SL trúng tuyển']),2)],
        'diem_2017_d1': list(df1['Điểm trúng Tuyển']),
        'diem_2017_d2': list(df2['Thi tuyển-Điểm trúng tuyển']),
        'sta_trungtuyen_2018_d2': [int(min(df4['SL trúng tuyển'])), int(max(df4['SL trúng tuyển'])), int(sum(df4['SL trúng tuyển'])), int(len(df4['SL trúng tuyển'])),round(statistics.variance(df4['SL trúng tuyển']),2),round(statistics.stdev(df4['SL trúng tuyển']),2),round(statistics.mean(df4['SL trúng tuyển']),2)],
        
        'nghanh_data_2018_cq': list(df2018_CQ['Ngành']),
        'chitieu_data_2018_cq': list(df2018_CQ['Chỉ tiêu']),
        'tongDKXT_data_2018_cq': list(df2018_CQ['Tổng ĐKXT']),
        'DKXTNV1_data_2018_cq': list(df2018_CQ['ĐKXT NV 1']),
        'trungtuyen_data_2018_cq': list(df2018_CQ['Trúng tuyển']),
        'nhaphoc_data_2018_cq': list(df2018_CQ['Nhập học']),
        'sta_chitieu_data_2018_cq': [(min(df2018_CQ['Chỉ tiêu'])), (max(df2018_CQ['Chỉ tiêu'])), (sum(df2018_CQ['Chỉ tiêu'])), int(len(df2018_CQ['Chỉ tiêu'])),round(statistics.variance(df2018_CQ['Chỉ tiêu']),2),round(statistics.stdev(df2018_CQ['Chỉ tiêu']),2),round(statistics.mean(df2018_CQ['Chỉ tiêu']),2)],
        'sta_tongDKXT_data_2018_cq': [(min(df2018_CQ['Tổng ĐKXT'])), (max(df2018_CQ['Tổng ĐKXT'])), (sum(df2018_CQ['Tổng ĐKXT'])), int(len(df2018_CQ['Tổng ĐKXT'])),round(statistics.variance(df2018_CQ['Tổng ĐKXT']),2),round(statistics.stdev(df2018_CQ['Tổng ĐKXT']),2),round(statistics.mean(df2018_CQ['Tổng ĐKXT']),2)],
        'sta_DKXTNV1_data_2018_cq': [(min(df2018_CQ['ĐKXT NV 1'])), (max(df2018_CQ['ĐKXT NV 1'])), (sum(df2018_CQ['ĐKXT NV 1'])), int(len(df2018_CQ['ĐKXT NV 1'])),round(statistics.variance(df2018_CQ['ĐKXT NV 1']),2),round(statistics.stdev(df2018_CQ['ĐKXT NV 1']),2),round(statistics.mean(df2018_CQ['ĐKXT NV 1']),2)],
        'sta_trungtuyen_data_2018_cq': [(min(df2018_CQ['Trúng tuyển'])), (max(df2018_CQ['Trúng tuyển'])), (sum(df2018_CQ['Trúng tuyển'])), int(len(df2018_CQ['Trúng tuyển'])),round(statistics.variance(df2018_CQ['Trúng tuyển']),2),round(statistics.stdev(df2018_CQ['Trúng tuyển']),2),round(statistics.mean(df2018_CQ['Trúng tuyển']),2)],
        'sta_nhaphoc_data_2018_cq': [(min(df2018_CQ['Nhập học'])), (max(df2018_CQ['Nhập học'])), (sum(df2018_CQ['Nhập học'])), int(len(df2018_CQ['Nhập học'])),round(statistics.variance(df2018_CQ['Nhập học']),2),round(statistics.stdev(df2018_CQ['Nhập học']),2),round(statistics.mean(df2018_CQ['Nhập học']),2)],
        'nghanh_data_2018_tx': list(df2018_TX['Nghành-Hệ đào tạo-Hình thức đào tạo']),
        'trungtuyen_data_2018_tx': list(df2018_TX['SL trúng tuyển']),
        'sta_trungtuyen_data_2018_tx': [(min(df2018_TX['SL trúng tuyển'])), (max(df2018_TX['SL trúng tuyển'])), (sum(df2018_CQ['Trúng tuyển'])), int(len(df2018_TX['SL trúng tuyển'])),round(statistics.variance(df2018_TX['SL trúng tuyển']),2),round(statistics.stdev(df2018_TX['SL trúng tuyển']),2),round(statistics.mean(df2018_TX['SL trúng tuyển']),2)],
        'nghanh_data_2018_ch': list(df2018_CH['Ngành']),
        'duthi_data_2018_ch': list(df2018_CH['Dự thi']),
        'trungtuyen_data_2018_ch': list(df2018_CH['Trúng tuyển']),
        'sta_duthi_data_2018_tx': [(min(df2018_CH['Dự thi'])), (max(df2018_CH['Dự thi'])), (sum(df2018_CH['Dự thi'])), int(len(df2018_CH['Dự thi'])),round(statistics.variance(df2018_CH['Dự thi']),2),round(statistics.stdev(df2018_CH['Dự thi']),2),round(statistics.mean(df2018_CH['Dự thi']),2)],
        'sta_trungtuyen_data_2018_tx': [(min(df2018_CH['Trúng tuyển'])), (max(df2018_CH['Trúng tuyển'])), (sum(df2018_CH['Trúng tuyển'])), int(len(df2018_CH['Trúng tuyển'])),round(statistics.variance(df2018_CH['Trúng tuyển']),2),round(statistics.stdev(df2018_CH['Trúng tuyển']),2),round(statistics.mean(df2018_CH['Trúng tuyển']),2)],
        'tinh_data_2018_tinh': list(df2018_TINH['Tên tỉnh']),
        'soluong_dk_data_2018_tinh': list(df2018_TINH['Số lượng thí sinh ĐK']),
        'trungtuyen_d1_data_2018_tinh': list(df2018_TINH['Trúng tuyển đợt 1']),
        'trungtuyen_d2_data_2018_tinh': list(df2018_TINH['Trúng tuyển đợt 2']),
        'nhaphoc_data_2018_tinh': list(df2018_TINH['Nhập học']),
        'sta_soluong_dk_data_2018_tinh': [(min(df2018_TINH['Số lượng thí sinh ĐK'])), (max(df2018_TINH['Số lượng thí sinh ĐK'])), (sum(df2018_TINH['Số lượng thí sinh ĐK'])), int(len(df2018_TINH['Số lượng thí sinh ĐK'])),round(statistics.variance(df2018_TINH['Số lượng thí sinh ĐK']),2),round(statistics.stdev(df2018_TINH['Số lượng thí sinh ĐK']),2),round(statistics.mean(df2018_TINH['Số lượng thí sinh ĐK']),2)],
        'sta_trungtuyen_d1_data_2018_tinh': [(min(df2018_TINH['Trúng tuyển đợt 1'])), (max(df2018_TINH['Trúng tuyển đợt 1'])), (sum(df2018_TINH['Trúng tuyển đợt 1'])), int(len(df2018_TINH['Trúng tuyển đợt 1'])),round(statistics.variance(df2018_TINH['Trúng tuyển đợt 1']),2),round(statistics.stdev(df2018_TINH['Trúng tuyển đợt 1']),2),round(statistics.mean(df2018_TINH['Trúng tuyển đợt 1']),2)],
        'sta_trungtuyen_d2_data_2018_tinh': [(min(df2018_TINH['Trúng tuyển đợt 2'])), (max(df2018_TINH['Trúng tuyển đợt 2'])), (sum(df2018_TINH['Trúng tuyển đợt 2'])), int(len(df2018_TINH['Trúng tuyển đợt 2'])),round(statistics.variance(df2018_TINH['Trúng tuyển đợt 2']),2),round(statistics.stdev(df2018_TINH['Trúng tuyển đợt 2']),2),round(statistics.mean(df2018_TINH['Trúng tuyển đợt 2']),2)],
        'sta_nhaphoc_data_2018_tinh': [(min(df2018_TINH['Nhập học'])), (max(df2018_TINH['Nhập học'])), (sum(df2018_TINH['Nhập học'])), int(len(df2018_TINH['Nhập học'])),round(statistics.variance(df2018_TINH['Nhập học']),2),round(statistics.stdev(df2018_TINH['Nhập học']),2),round(statistics.mean(df2018_TINH['Nhập học']),2)],
        
        'pearson_chitieu_diem_2017': pearson_chitieu_diem_2017,
        'pearson_trungtuyen_diem_2017': pearson_trungtuyen_diem_2017,
        'spearman_chitieu_diem_2017': spearman_chitieu_diem_2017,
        'spearman_trungtuyen_diem_2017': spearman_trungtuyen_diem_2017,
        'pearson_chitieu_diem_2018': pearson_chitieu_diem_2017,
        'pearson_trungtuyen_diem_2018': pearson_trungtuyen_diem_2018,
        'spearman_chitieu_diem_2018': spearman_chitieu_diem_2018,
        'spearman_trungtuyen_diem_2018': spearman_trungtuyen_diem_2018,

        'spearman_trungtuyen_diem_2017_d1': spearman_trungtuyen_diem_2017_d1,
        'pearson_trungtuyen_diem_2017_d1': pearson_trungtuyen_diem_2017_d1,
        'spearman_trungtuyen_diem_2017_d2': spearman_trungtuyen_diem_2017_d2,
        'pearson_trungtuyen_diem_2017_d2': pearson_trungtuyen_diem_2017_d2,

        'spearman_duthi_trungtuyen_2018_ch': spearman_duthi_trungtuyen_2018_ch,
        'pearson_duthi_trungtuyen_2018_ch': pearson_duthi_trungtuyen_2018_ch,

        'spearman_dangky_trungtuyen_2018_tinh': spearman_dangky_trungtuyen_2018_tinh,
        'pearson_dangky_trungtuyen_2018_tinh': pearson_dangky_trungtuyen_2018_tinh,

        'spearman_chitieu_nhaphoc_2018_cq': spearman_chitieu_nhaphoc_2018_cq,
        'pearson_chitieu_nhaphoc_2018_cq': pearson_chitieu_nhaphoc_2018_cq,

    }

    return JsonResponse(data)