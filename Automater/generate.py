import os
from PIL import Image

dirs = os.listdir('./src')
string = ''

for dir in dirs:
    if dir != '.DS_Store' and dir != '.idea':
        with open(f'./Imports/{dir}.txt','w') as file:
            folders = os.listdir(f'./src/{dir}')
            for folder in folders:
                if folder != '.DS_Store' and folder != '.idea' and folder != 'Preview':
                    previews = os.listdir(f'./src/{dir}/{folder}/Preview')
                    for preview in previews:
                        if preview != '.DS_Store' and preview != '.idea':
                            condensed = preview.split('.')[0].replace(' ','')
                            string += condensed + ','
                            file.write(f"import {condensed} from './{preview}'")
                            file.write('\n')
        print(string)
        string = ''

