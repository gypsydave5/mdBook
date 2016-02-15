initSidebarItems({"fn":[["copy_files_except_ext","Copies all files of a directory to another one except the files with the extensions given in the `ext_blacklist` array"],["create_file","This function creates a file and returns it. But before creating the file it checks every directory in the path to see if it exists, and if it does not it will be created."],["path_to_root","Takes a path and returns a path containing just enough `../` to point to the root of the given path.This is mostly interesting for a relative path to point back to the directory from where the path starts.**Outputs****note:** it's not very fool-proof, if you find a situation where it doesn't return the correct path. Consider submitting a new issue or a pull-request to improve it."],["remove_dir_content","Removes all the content of a directory but not the directory itself"],["render_markdown","Wrapper around the pulldown-cmark parser and renderer to render markdown"]]});