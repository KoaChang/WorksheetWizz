import os
from PIL import Image

dirs = os.listdir('./src')

for dir in dirs:
    if dir != '.DS_Store' and dir != '.idea':
        folders = os.listdir(f'./src/{dir}')
        os.mkdir(f'./Imports3/{dir}')
        for folder in folders:
            if folder != '.DS_Store' and folder != '.idea' and folder != 'Preview':
                with open(f'./Imports3/{dir}/{folder}.txt', 'w') as file:
                    previews = os.listdir(f'./src/{dir}/{folder}/Preview')
                    for preview in previews:
                        if preview != '.DS_Store' and preview != '.idea':
                            condensed = preview.split('.')[0].replace(' ','')
                            file.write(f"import {condensed} from './{preview}'")
                            file.write('\n')

