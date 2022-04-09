res = {}

with open("django-tmp.po", "r") as file:
    lines = file.readlines()
    i = 0
    while i < len(lines):
        if "msgid" in lines[i]:
            src = (" ".join(lines[i].split(" ")[1:])).strip().replace('"', "")
            dts = (" ".join(lines[i+1].split(" ")[1:])).strip().replace('"', "")
            if src == "" or dts == "":
                i += 1
                continue
            res[src] = dts
            # print(src, dts)
        i += 1

print(res)

with open("django.po", "w", encoding="utf8") as file:
    for key in res:
        try:
            file.write("msgid \"{}\"\n".format(key.encode('utf-8').decode('utf-8')))
            file.write("msgstr \"{}\"\n".format(res[key].encode('utf-8').decode('utf-8')))
            file.write("\n")
        except:
            print("Error:", key)
