import xlrd
import os

delete = False

def export(path):
    wb = xlrd.open_workbook(path.inPath)
    sheet = wb.sheet_by_index(0)

    print("remove all old loclaize file")

    commandDelete =  " && del /Q /F *"
    commandMove = " && move /y  *.* " + path.outOldPath
    if (delete):
        command = ("cd " + path.outPath + commandDelete)
    else:
        command = ("cd " + path.outPath + commandMove)
    print(command)
    os.system(command)
    
    langFile = []
    for l in range(1, sheet.ncols):
        lang = sheet.cell_value(0, l)
        langFile.append(path.outPath + lang + ".txt")

    for l in range(len(langFile)):
        langFile[l] = open(langFile[l], "w", encoding="utf-8")

    for loc in range(1, sheet.nrows):
        for l in range(len(langFile)):
            singleLoc = sheet.cell_value(loc, 0) + "\t=" + sheet.cell_value(loc, l+1) + "\n"
            langFile[l].write(singleLoc)
    
    for l in langFile:
        l.close()