-- AddForeignKey
ALTER TABLE "roles_permission" ADD CONSTRAINT "roles_permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permission" ADD CONSTRAINT "roles_permission_permission_code_fkey" FOREIGN KEY ("permission_code") REFERENCES "permissions"("code") ON DELETE CASCADE ON UPDATE CASCADE;
