Accessing Instructor Inventory on Ansible Node
==============================================

OVERVIEW
--------

Finding the Instructor Inventory within the Ansible Node can be utilized to connect to 
things like the F5 BIG-IP Public IP address, or the Web Nodes.  This section covers how to access
the instructor inventory within the Ansible Node in the prebuilt (Provisioned Environment)


HOW TO ACCESS
-------------

1. Login to the Ansible Node (studentX@ansible_node_ip) provided by the F5 Ansible AWS Provisioner
 
   The Workbench information is stored in a local directory/file lab_inventory/hosts

   From the command line run 

   .. code:: bash
   
      cat ~/lab_inventory/hosts

   Sample hosts file:

   .. code:: bash

      [all:vars]
      ansible_user=studentx
      ansible_password=MySuperSecretPassword!
      ansible_port=22

      [lb]
      f5 ansible_host=52.39.228.xxx ansible_user=admin private_ip=172.16.243.236 ansible_password=MySuperSecretPassword!

      [control]
      ansible ansible_host=34.219.251.xxx ansible_user=ec2-user private_ip=172.16.6.239

      [web]
      node1 ansible_host=52.43.153.xxx ansible_user=ec2-user private_ip=172.16.213.84
      node2 ansible_host=34.215.176.xxx ansible_user=ec2-user private_ip=172.16.97.147
