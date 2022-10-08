import os

previews = os.listdir('./Preview')

string = ""
with open('text.txt','w') as file:
    for preview in previews:
        if preview != '.DS_Store' and preview != '.idea':
            full = preview
            preview = preview.split('.')[0]
            condensed = preview.replace(' ','')
            string += condensed + ','
            file.write(f'import {condensed} from "./{full}"\n')

print(string)

# import os
# from pdf2image import convert_from_path
# import shutil
#
#
# os.mkdir(f'./Preview')
# previews = os.listdir('./SAT Practice Tests')
# for preview in previews:
#     if preview != ".DS_Store" and preview != '.idea':
#         if 'pdf' in preview:
#             filename = preview.split('.')[0]
#             new = convert_from_path(f'./SAT Practice Tests/{preview}',last_page=1)[0]
#             new.save(f'./Preview/{filename}.jpg', 'JPEG')


